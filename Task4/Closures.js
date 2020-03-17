// 1-https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript
var Cat = function (name, weight) {
  if (name === undefined || weight === undefined) {
    throw new TypeError();
  }
  Object.defineProperty(this, 'name', {
    get() { return name; },
    set(Catname) { name = Catname; }
  });
  Object.defineProperty(this, 'weight', {
    get() { return weight; },
    set(newWeight) {
      Cat.weightSum -= weight;
      Cat.weightSum += newWeight;
      weight = newWeight;
    }
  });
  Cat.count = ++Cat.count || 1;
  Cat.weightSum = Cat.weightSum + weight || weight;
};
Object.defineProperty(Cat, 'averageWeight', { value: function () { return Cat.weightSum / Cat.count } });