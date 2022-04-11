//To make test pass, we need to implement the function:
function filterByTerm(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, 'i');
    return inputArr.filter(function (arrayElement){
        return arrayElement.url.match(regex);
    })
}

//Method contains one or more related tests, everytime writing a new suit of test for a functionality wrap it in a describe block
describe("Filter function", () => {
    // "test" is the actual test block
    test("it should filter by a search term ()", () => {
       //actual test
        const input = [
            {id: 1, url: "https://www.url1.dev"},
            {id: 2, url: "https://www.url2.dev"},
            {id: 3, url: "https://www.link3.dev"}
        ];
        const output = [  {id: 1, url: "https://www.url1.dev"},
            {id: 2, url: "https://www.url2.dev"},
            {id: 3, url: "https://www.link3.dev"}];
        // Returns the result
        expect(filterByTerm(input), "").toEqual(output);




    });
});
