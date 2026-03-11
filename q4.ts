function countPalindromicSubsequence(s: string): number {
  let letters = new Set<string>();
  let palindroms = new Set<string>();
  let c = '';
  for (let index = 0; index < s.length; index++) {
    c = s.charAt(index);
    console.log(index, ' , ', s.lastIndexOf(s.charAt(index)), ' : ', s.charAt(index));

    if (s.lastIndexOf(c) > index && !letters.has(c)) {
      letters.add(c);
      for (let j = index + 1; j < s.lastIndexOf(c); j++) {
        if (!palindroms.has(`${c}${s.charAt(j)}${c}`)) {
          palindroms.add(`${c}${s.charAt(j)}${c}`)
        }
      }
      console.log('leeters : ', letters);

      console.log("after loop: ", palindroms);
    }
  }
  return palindroms.size;
  // const map = new Map<string, number[]>();
  // const set = new Set<string>();
  //     for (let index = 0; index < s.length; index++) {
  //           c = s.charAt(index);
  //       if(!map.has(c)){
  //         map.set(c,[index])
  //         set.add(c);
  //       }
  //       else{
  //         map.get(c)?.push(index)
  //       }
  //     }
  //     console.log("the set : ", set);

  //     console.log("the map: ", map);
  //     map.forEach((indexes, key)=> {
  //       console.log(key);
  //       if (indexes.length> 2) {
  //         palindroms.push(`${key}${key}${key}`)
  //       }
  //     })
  //     console.log(palindroms);

  //     return 1;

};

console.log(countPalindromicSubsequence("bbcbaba"));
