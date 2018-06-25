import {create} from '../../src/actions/index'

describe('create game', () => {
  it('has increasing game ID', () => {
    const submissions = [
      create("Hangman"),
      create("Hangman")
    ];
    expect(submissions[1].payload.id).to.eq(
      submissions[0].payload.id + 1
    );
  });
});
