import { TextlintRuleModule } from '@textlint/types';
import { tokenize } from 'kuromojin';
import ondulish from './lib/ondulish';

export interface Options {
  // if the Str includes `allows` word, does not report it
  allows?: string[];
}

const reporter: TextlintRuleModule<Options> = (context) => {
  const { Syntax, RuleError, report, fixer, getSource } = context;
  // const allows = options.allows ?? [];

  return {
    async [Syntax.Str](node) {
      const text = getSource(node); // 文字列を取得

      const tokens = await tokenize(text); // kuromojiで形態素解析し、単語に分ける
      tokens.forEach((token) => {
        // 単語が日本語の場合token.readingにカタカナ読みが入るので、その時のみ処理
        if (token.reading) {
          const ondul = ondulish(token.reading); // オンドゥル語に変換
          if (token.reading !== ondul) {
            const message = `${token.surface_form} => ${ondul}`; // 出力メッセージへ整形
            const tokenFromIndex = token.word_position - 1;
            const tokenToIndex = tokenFromIndex + token.surface_form.length;
            // メッセージを出力するためのRuleErrorクラスの作成
            const ruleError = new RuleError(message, {
              index: tokenFromIndex,
              fix: fixer.replaceTextRange(
                [tokenFromIndex, tokenToIndex],
                ondul,
              ),
            });
            // メッセージ出力
            report(node, ruleError);
          }
        }
      });
    },
  };
};

export default {
  linter: reporter,
  fixer: reporter,
};
