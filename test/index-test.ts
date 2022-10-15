import TextLintTester from 'textlint-tester';
import rule from '../src';

const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run('rule', rule, {
  invalid: [
    {
      text: `本当に裏切った`,
      errors: [
        {
          message: '本当に => ｵﾝﾄﾞｩﾙﾙ',
          line: 1,
          column: 1,
        },
        {
          message: '裏切っ => ﾙﾗｷﾞｯ',
          line: 1,
          column: 4,
        },
        {
          message: 'た => ﾀﾞ',
          line: 1,
          column: 7,
        },
      ],
    },
  ],
});
