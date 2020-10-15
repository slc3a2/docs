function currying (fn) {
  var args = [].slice.call(arguments, 1);
  console.log(args)
  return function() {
      var newArgs = args.concat([].slice.call(arguments));
      return fn.apply(this, newArgs);
  };
}