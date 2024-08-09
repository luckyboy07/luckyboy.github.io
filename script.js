
$(".img-hover").mouseover(function () {
  $(this).attr('src', $(this).data("hover"));
}).mouseout(function () {
  $(this).attr('src', $(this).data("src"));
});


function bubbleSort(array) {
    console.log('ARRRAY', array)
    for(let i = 0; i < array.length -1; i++){
    console.log('i--->', i)
    for(let j = 0; j < array.length - i - 1; j++) {
      console.log('j', j)
      console.log('array[j]', array[j])
      console.log('array[j+1', array[j+1])
      if(array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        console.log('now', array)
      }
    }
  }
  return array;
}
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sorted = bubbleSort(unsortedArray);

console.log(sorted)