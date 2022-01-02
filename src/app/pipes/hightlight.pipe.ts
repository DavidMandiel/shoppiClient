import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(str: any, word: any): any {
    let newWord =  word
    let otherStr = ''
    if (word && str) {
      str = String(str)
      str.toLowerCase()
      const startIndex = word.toLowerCase().indexOf(str)
      const endIndex = startIndex + (str.length-1)
      let matchingString = word.substr(startIndex, str.length);
                if(startIndex < 0){
              return newWord
            }else if (startIndex === 0){
              otherStr = word.substr(endIndex+1, word.length)
              newWord =  ("<mark>" + matchingString + "</mark>" +otherStr)
            return newWord
            }else{
                let partOne = word.substr(0,startIndex)
                let partTwo = word.substr(endIndex+1, word.length)
                newWord = (partOne + "<mark>" + matchingString + "</mark>"+partTwo)
            }
            return newWord
            }
            return newWord


}

}
