// 5. 最长回文子串, 中心扩散法   ✅
var longestPalindrome = function(s) {
  let mark = '';
  if(s.length === 1 || s.length === 0 || s.split('').reverse().join('') === s){return s}
  if(s.length === 2){return s[0] === s[1] ? s : s[0]}
  let len = s.length;
  for(let i = 0; i < len; i++) {
    // 满足s[i] === s[i+1]为双中心，否则为单中心
    if(s[i] === s[i+1]) {
      let left = i-1;
      let right = s[i] === s[i+1] ? i+2 : i+1;
      while(left >= 0 && right < len && s[left] === s[right]) {
        left--;
        right++;
      }
      // left+1是因为left最小值为0，由于while允许0进入，所以left最小值是-1，需要加1再截取
      let result = s.slice(left+1, right);
      if(mark.length < result.length) {
        mark = result;
      }
    }
    let left = i-1;
    let right = i+1;
    while(left >= 0 && right < len && s[left] === s[right]) {
      left--;
      right++;
    }
    let result = s.slice(left+1, right);
    if(mark.length < result.length) {
      mark = result;
    }
  }
  return mark;
};
longestPalindrome('babad')
longestPalindrome('cbbd')
longestPalindrome('ccc')
longestPalindrome('sooosg')
longestPalindrome("cbbd")
longestPalindrome("adam")
longestPalindrome('babad')
console.log(longestPalindrome('babad'))
longestPalindrome("azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc")

let arr = [
  {
    id:1,
    no: '131',
    count: 0
  },
  {
    id:1,
    no: '121',
    count: 0
  },
  {
    id:4,
    no: '13',
    count: 0
  }
]
console.log('转换前')
console.log(arr)
function trans(arr) {
  for(let i = 0; i < arr.length; i++) {
    let curItem = arr[i];
    for(let j = i + 1; j < arr.length - 1; j++) {
      let diffItem = arr[j];
      if(curItem.id === diffItem.id) {
        curItem['no'] = curItem['no'].split();
        curItem['no'].push(diffItem['no'])
        curItem['count']++;
        arr[j] = null;
      }
    }
  }
  arr = arr.filter((i)=>{return i});
  console.log('转换后')
  console.log(arr)
  return arr;
}
trans(arr)
