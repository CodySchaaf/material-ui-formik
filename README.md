# material-ui-formik

When just using material-ui and importing a single component like `<Checkbox />` you can see material
only adds 12.35KB (gzipped)

![Image Not Using formik-material-ui](./not%20using%20formik-material-ui.png)

But once you switch to `formik-material-ui`'s `Checkbox` the bundle includes all `material-ui` components imported into `formik-material-ui`
because of how the library builds all of the exports into a single `dist/index.js` file. This results in > 30KB (gzipped) bundle.


![Image Not Using formik-material-ui](./using%20formik-material-ui.png)
