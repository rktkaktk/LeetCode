/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) {
      return 0;
      }
  // 중복되는 범위가 있는지 체크해 본다
  // 1,2,2,3,3,4,1,3,
  // 1, 2
  //    2, 3
  //       3, 4,
  //          1, 3
  
  // 두번째 숫자 기준으로 정렬 필요
  // 1, 2
  //    3, 4,
  //       2, 3
  
  
  // 1, 2
  //    1, 3      
  //       2, 3
  //          3, 4,
  
  // 1, 2
  //    2, 3      
  //       1, 3
  //          3, 4,
  
  // 1, 2
  //    1, 2
  //      1, 2 
  
  
  // (               )
  //     (   )
  // (   )
  //   (  )
  // 1, 11
  //    2, 12
  //       11, 22
  //            1, 100
  
  intervals.sort((a, b) => a[1] - b[1]);
  let result = 0;
  let prevInterval = intervals[0];
  
  // 이전 [1]이 현재[0] 보다 크면 카운드 업
  for (let i = 1; i < intervals.length; i++) {
    if (prevInterval[1] > intervals[i][0]) {
        result +=1;
    } else {
      prevInterval = intervals[i];
    }
  }
  return result;
};