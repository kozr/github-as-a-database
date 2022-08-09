import { GHStorage } from './GHStorage';

const db = new GHStorage({
  owner: 'kozr',
  repo: 'kozr',
  personalAccessToken: process.env.GITHUB_ACCESS_TOKEN as string,
});

db.putObject('testbb.txt', 'original word')
  .then((e) => {
    db.putObject('test.txt', 'replaced word')
      .then((e) => {
        db.getObject('test.txt')
          .then((e) => {
            debugger;
            if (e !== 'replaced word') Promise.reject('Update did not work');
            db.removeObject('test.txt')
              .then((e) => {})
              .catch((e) => {
                debugger;
              });
          })
          .catch((e) => {
            debugger;
          });
      })
      .catch((e) => {
        debugger;
      });
  })
  .catch((e) => {
    debugger;
  });
