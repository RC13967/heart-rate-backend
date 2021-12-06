import express from "express";
const app = express();
app.use(express.json());
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
app.use(cors());
import fs from "fs";
const PORT = process.env.PORT;
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n')
   .map((element)=>element.trim());
let sub1 = readFileLines('subj1.txt').filter((el,index)=>index<60000);
let sub2 = readFileLines('subj2.txt').filter((el,index)=>index < 30000 );
let sub3 = readFileLines('subj3.txt');
//Algorithm 1 sub1
let sub1Min = Math.min(...sub1);
let sub1Max = Math.max(...sub1);
let sub1Avg = (sub1Max + sub1Min) / 2;
var sub1Threshold = sub1Avg ;
let peaks1 = sub1.filter((el,index)=>el>sub1Threshold && el > sub1[index - 1] && el > sub1[index + 1] );
//Algorithm 1 sub2
let sub2Min = Math.min(...sub2);
let sub2Max = Math.max(...sub2);
let sub2Avg = (sub2Max + sub2Min) / 2;
var sub2Threshold = sub2Avg ;
let peaks2 = sub2.filter((el,index)=>el>sub2Threshold && el > sub2[index - 1] && el > sub2[index + 1] );
//Algorithm 1 sub3
let sub3Min = Math.min(...sub3);
let sub3Max = Math.max(...sub3);
let sub3Avg = (sub3Max + sub3Min) / 2;
var sub3Threshold = sub3Avg ;
let peaks3 = sub3.filter((el,index)=>el>sub3Threshold && el > sub3[index - 1] && el > sub3[index + 1] );
//Algorithm2 sub1
let sub1Diff = [];
let sub1DoubleDiff = [];
let sub1DoubleDiffSquare = [];
for(let i = 0; i<sub1.length - 1;i++){
    sub1Diff[i] = sub1[i+1] - sub1[i];
}
for(let i = 0; i<sub1Diff.length - 1;i++){
    sub1DoubleDiff[i] = sub1Diff[i+1] - sub1Diff[i];
    sub1DoubleDiffSquare[i] = sub1DoubleDiff[i]**2
}
let sub1Alg2 = sub1DoubleDiffSquare
let sub1Alg2Min = Math.min(...sub1Alg2);
let sub1Alg2Max = Math.max(...sub1Alg2);
let sub1Alg2Avg = (sub1Alg2Max + sub1Alg2Min) / 2;
var sub1Alg2Threshold = sub1Alg2Avg/2 ;
let peaks1Alg2 = [];
for(let i=1;i<sub1Alg2.length-1;i++){
    if(sub1Alg2[i] > sub1Alg2Threshold && sub1Alg2[i] > sub1Alg2[i - 1] && sub1Alg2[i] > sub1Alg2[i + 1])
    peaks1Alg2.push(sub1Alg2[i])
    else peaks1Alg2.push(0)
}
for(let i=0;i<peaks1Alg2.length-500 ;i++){
    let lastMax = 0;
    let lastMaxIndex = 0;
        for(let j=i;j<i + 500;j++){
            if(peaks1Alg2[j] > 0 && peaks1Alg2[j] <= lastMax){
                peaks1Alg2[j] = 0;
            }
            else if(peaks1Alg2[j] > 0 && peaks1Alg2[j] > lastMax){
                peaks1Alg2[lastMaxIndex] = 0;
                lastMax = peaks1Alg2[j];
                lastMaxIndex = j;
            }
           
           
        }

};
//algorithm2 sub2
let sub2Diff = [];
let sub2DoubleDiff = [];
let sub2DoubleDiffSquare = [];
for(let i = 0; i<sub2.length - 1;i++){
    sub2Diff[i] = sub2[i+1] - sub2[i];
}
for(let i = 0; i<sub2Diff.length - 1;i++){
    sub2DoubleDiff[i] = sub2Diff[i+1] - sub2Diff[i];
    sub2DoubleDiffSquare[i] = sub2DoubleDiff[i]**2
}
let sub2Alg2 = sub2DoubleDiffSquare
let sub2Alg2Min = Math.min(...sub2Alg2);
let sub2Alg2Max = Math.max(...sub2Alg2);
let sub2Alg2Avg = (sub2Alg2Max + sub2Alg2Min) / 2;
var sub2Alg2Threshold = sub2Alg2Avg/2 ;
let peaks2Alg2 = [];
for(let i=1;i<sub2Alg2.length-1;i++){
    if(sub2Alg2[i] > sub2Alg2Threshold && sub2Alg2[i] > sub2Alg2[i - 1] && sub2Alg2[i] > sub2Alg2[i + 1])
    peaks2Alg2.push(sub2Alg2[i])
    else peaks2Alg2.push(0)
}
for(let i=0;i<peaks2Alg2.length-200 ;i++){
    let lastMax = 0;
    let lastMaxIndex = 0;
        for(let j=i;j<i + 200;j++){
            if(peaks2Alg2[j] > 0 && peaks2Alg2[j] <= lastMax){
                peaks2Alg2[j] = 0;
            }
           else if(peaks2Alg2[j] > 0 && peaks2Alg2[j] > lastMax){
                peaks2Alg2[lastMaxIndex] = 0;
                lastMax = peaks2Alg2[j];
                lastMaxIndex = j;
            }
        }
};
//algorithm2 sub3
let sub3Diff = [];
let sub3DoubleDiff = [];
let sub3DoubleDiffSquare = [];
for(let i = 0; i<sub3.length - 1;i++){
    sub3Diff[i] = sub3[i+1] - sub3[i];
}
for(let i = 0; i<sub3Diff.length - 1;i++){
    sub3DoubleDiff[i] = sub3Diff[i+1] - sub3Diff[i];
    sub3DoubleDiffSquare[i] = sub3DoubleDiff[i]**2
}
let sub3Alg2 = sub3DoubleDiffSquare
let sub3Alg2Min = Math.min(...sub3Alg2);
let sub3Alg2Max = Math.max(...sub3Alg2);
let sub3Alg2Avg = (sub3Alg2Max + sub3Alg2Min) / 2;
var sub3Alg2Threshold = sub3Alg2Avg/2 ;
let peaks3Alg2 = [];
for(let i=1;i<sub3Alg2.length-1;i++){
    if(sub3Alg2[i] > sub3Alg2Threshold && sub3Alg2[i] > sub3Alg2[i - 1] && sub3Alg2[i] > sub3Alg2[i + 1])
    peaks3Alg2.push(sub3Alg2[i])
    else peaks3Alg2.push(0)
}
for(let i=0;i<peaks3Alg2.length-200 ;i++){
    let lastMax = 0;
    let lastMaxIndex = 0;
        for(let j=i;j<i + 200;j++){
            if(peaks3Alg2[j] > 0 && peaks3Alg2[j] <= lastMax){
                peaks3Alg2[j] = 0;
            }
           else if(peaks3Alg2[j] > 0 && peaks3Alg2[j] > lastMax){
                peaks3Alg2[lastMaxIndex] = 0;
                lastMax = peaks2Alg2[j];
                lastMaxIndex = j;
            }
        }
};
app.get("/getData", (request, response) => {
    response.send({sub1:sub1, peaks1:peaks1, sub1Alg2:sub1Alg2,peaks1Alg2:peaks1Alg2.filter((el)=>el>0),
        sub2:sub2, peaks2:peaks2, sub2Alg2:sub2Alg2,peaks2Alg2:peaks2Alg2.filter((el)=>el>0),
        sub3:sub3, peaks3:peaks3, sub3Alg2:sub3Alg2,peaks3Alg2:peaks3Alg2.filter((el)=>el>0)
    })
});
app.listen(PORT, () => console.log("The server is started"));