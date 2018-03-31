# CodeForGoodMicrosite

- Link to what I wrote: [here](https://github.com/robertvunabandi/cfd/tree/master/cfdBackup). Use this as a reference and a learning tool. - Robert

## HTML

- [Example of Adding DOM Elements with JS](https://github.com/mit6148-workshops/catbook-workshop4/blob/step6/public/js/feed.js)
# Firebase Resources

- [Read and Write Data](https://firebase.google.com/docs/database/web/read-and-write)
- [Structuring your Data](https://firebase.google.com/docs/database/web/structure-data)
- [Reference](https://firebase.google.com/docs/reference/js/firebase.database.Reference)

## Github Commands

### After I made changes to a file:

Say you made changes to `hello_world.html` and you want to push it to github. Just run the following:
```
git pull
git add hellow_world.html
git commit -m 'I just changed hello_world!'
git push -u origin master
```

Or, to just add all the modified files:

```
git pull
git add -A
git commit -m 'I just changed hello_world!'
git push -u origin master
```

#### What's the `-u`? 

You don't actually need it, but if you do it on the first push, then on your subsequent pushes, you only need to type `git push` instead of `git push origin master`

#### What's `master`?

`master` is the master branch. You can have multiple branches. 

#### More on github: [here](https://education.github.com/git-cheat-sheet-education.pdf)


