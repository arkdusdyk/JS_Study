function solution(participant, completion) {
    var answer = '';
    const race_dict = {};
    for (let i=0;i<participant.length;i++){
        if ((participant[i] in race_dict) == false){
            race_dict[participant[i]] = 1;
        }
        else{
            race_dict[participant[i]] += 1;
        }
    }
    for (let i=0;i<completion.length;i++){
        race_dict[completion[i]] -= 1
    }
    for (var key in race_dict){
        if (race_dict[key] > 0){
            answer = key;
            break;
        }
    }
    return answer;
}

participant = ["leo", "kiki", "eden"]
completion = ["eden", "kiki"]
console.log(solution(participant, completion))

/* JS로 시도한 첫 코테 연습 문제 - Hash
*/