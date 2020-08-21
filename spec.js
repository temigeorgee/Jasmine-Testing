describe("replaceWith", function () {
	it("replaces a capital with a capital", function(){
		expect(replaceWith("Foo", "F", "B")).toEqual("Boo");
	});
	it("does not capitalize when it isn't passed a capital", function(){
		expect(replaceWith("awesome", "e", "z")).toEqual("awzsomz");
	});
});
describe("expand", function () {
	it("it triples the array when given three", function(){
		expect(expand([1,2,3],3)).toEqual([1,2,3,1,2,3,1,2,3]);
	});
	it("does not change the array when passed one", function(){
		expect(expand(["foo", "test"],1)).toEqual(["foo","test"]);
	});
});


describe("acceptNumbersOnly", function () {
	it("returns false if one of them isn't a number", function(){
		expect(acceptNumbersOnly(1,"foo")) .toEqual(false);
	});
	it("returns true if all of them are numbers", function(){
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).toEqual(true);
    });
    it("returns false if Nan is included even though it is a typeof Number", function(){
		expect(acceptNumbersOnly(1,2,3,4,5,6,NaN) ).toEqual(false);
	});
});


describe("mergeArrays", function () {
	it("returns an array and sorts alphabetically", function(){
		expect(mergeArrays(["foo", "test"],["merge", "me"])).toEqual(["foo", "me", "merge", "test"]);
	});
	it("returns merged array in numerical order", function(){
		expect(mergeArrays([2, 1], [3, 4])).toEqual([1, 2, 3, 4]);
	});
});

describe("mergeObjects",function(){
    it(" returns an object with the keys and values combined",function(){
     var obj1= {
            name: "Foo",
            num: 33
         }
         var obj2 = {
            test: "thing",
            num: 55
         }
        expect(mergeObjects(obj1, obj2)) .toEqual(
        {
            name: "Foo",
            test: "thing",
            num: 55
        }
        )
    })
})