// Modify the kebabize function so that it converts a camel case string into a kebab case.

//My solution

function kebabize(str) {
    return str.replace(/([A-Z])/g, '-$1').replace(/[0-9]/g, '').replace(/^-|-$/, '').toLowerCase()
  }