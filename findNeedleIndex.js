const findNeedleIndex=(haystack,needle)=>{
    return haystack.indexOf(needle);
}

const myText="subDatasub";
const needle='bav';

console.log(findNeedleIndex(myText,needle))