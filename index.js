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
let sub1 = readFileLines('subj1.txt').filter((el,index)=>index<10000).map((el)=>Number(el));
let sub2 = readFileLines('subj2.txt').filter((el,index)=>index<28000).map((el)=>Number(el));
let sub3 = readFileLines('subj3.txt').map((el)=>Number(el));
let sub4 = readFileLines('subj4.txt').map((el)=>Number(el));
//Algorithm 1 sub1
let sub1Min = Math.min(...sub1);
let sub1Max = Math.max(...sub1);
let mid = Math.floor(sub1.length / 2);
    let nums = [...sub1].sort((a, b) => a - b);
  let sub1Avg = sub1.length % 2 !== 0 ? nums[mid] : (Number(nums[mid - 1]) + Number(nums[mid])) / 2;
  let sub1mid = (sub1Max + sub1Min)/2
  var sub1Threshold = (sub1Avg + sub1Max + sub1mid)/3 ;
  let peaks1 = [];
  let peaks1Indexes=[];
  for(let i=0;i<sub1.length-1;i++){
    if(sub1[i] > sub1Threshold && sub1[i] >= sub1[i - 1] && sub1[i] > sub1[i + 1]){
        peaks1.push(sub1[i]);
        peaks1Indexes.push(i)
    }
    else {
        peaks1.push(-100);
        peaks1Indexes.push('na')
    }
}
for(let i=0;i<peaks1.length-75 ;i++){
    let lastMax = sub1Threshold;
    let lastMaxIndex = 0;
        for(let j=i;j<i + 75;j++){
            if(peaks1[j] > sub1Threshold && peaks1[j] <= lastMax){
                peaks1[j] = -100;
                peaks1Indexes[j] = 'na';
            }
            else if(peaks1[j] > sub1Threshold && peaks1[j] > lastMax){
                peaks1[lastMaxIndex] = -100;
                peaks1Indexes[lastMaxIndex] = 'na';
                lastMax = peaks1[j];
                lastMaxIndex = j;
            }
        }
};
peaks1 = peaks1.filter((el)=>el!=-100)
peaks1Indexes =  peaks1Indexes.filter((el)=>el!='na');
//Algorithm 1 sub2
let sub2Min = Math.min(...sub2);
let sub2Max = Math.max(...sub2);
 mid = Math.floor(sub2.length / 2);
     nums = [...sub2].sort((a, b) => a - b);
  let sub2Avg = sub2.length % 2 !== 0 ? nums[mid] : (Number(nums[mid - 1]) + Number(nums[mid])) / 2;
  let sub2mid = (sub2Max + sub2Min)/2
  var sub2Threshold = (sub2Avg + sub2Max + sub2mid)/3 ;
   let peaks2 = [];
  let peaks2Indexes=[];
 
for(let i=0;i<sub2.length-1;i++){
    if(sub2[i] > sub2Threshold && sub2[i] >= sub2[i - 1] && sub2[i] > sub2[i + 1]){
        peaks2.push(sub2[i])
        peaks2Indexes.push(i)
    }
    else {
        peaks2.push(-100)
        peaks2Indexes.push('na')}
}
for(let i=0;i<peaks2.length-200 ;i++){
    let lastMax = sub2Threshold;
    let lastMaxIndex = 0;
        for(let j=i;j<i + 200;j++){
            if(peaks2[j] > sub2Threshold && peaks2[j] <= lastMax){
                peaks2[j] = -100;
                peaks2Indexes[j] = 'na';
            }
           else if(peaks2[j] > sub2Threshold && peaks2[j] > lastMax){
                peaks2[lastMaxIndex] = -100;
                peaks2Indexes[lastMaxIndex] = 'na';
                lastMax = peaks2[j];
                lastMaxIndex = j;
            }
        }
};
peaks2 = peaks2.filter((el)=>el!=-100)
peaks2Indexes =  peaks2Indexes.filter((el)=>el!=='na');
//Algorithm 1 sub3
let sub3Min = Math.min(...sub3);
let sub3Max = Math.max(...sub3);
mid = Math.floor(sub3.length / 2);
    nums = [...sub3].sort((a, b) => a - b);
 let sub3Avg = sub3.length % 2 !== 0 ? nums[mid] : (Number(nums[mid - 1]) + Number(nums[mid])) / 2;
 let sub3mid = (sub3Max + sub3Min)/2
var sub3Threshold = (sub3Avg + sub3Max + sub3mid)/3 ;
let peaks3 = [];
let peaks3Indexes=[];

for(let i=0;i<sub3.length-1;i++){
    if(sub3[i] > sub3Threshold && sub3[i] >= sub3[i - 1] && sub3[i] > sub3[i + 1]){
        peaks3.push(sub3[i])
        peaks3Indexes.push(i)
    }
    else {
        peaks3.push(-100)
        peaks3Indexes.push('na')}
}
for(let i=0;i<peaks3.length-75 ;i++){
    let lastMax = sub3Threshold;
    let lastMaxIndex = 0;
        for(let j=i;j<i + 75;j++){
            if(peaks3[j] > sub3Threshold && peaks3[j] <= lastMax){
                peaks3[j] = -100;
                peaks3Indexes[j] = 'na';
            }
           else if(peaks3[j] > sub3Threshold && peaks3[j] > lastMax){
                peaks3[lastMaxIndex] = -100;
                peaks3Indexes[lastMaxIndex] = 'na';
                lastMax = peaks3[j];
                lastMaxIndex = j;
            }
        }
};
peaks3 = peaks3.filter((el)=>el!=-100)
peaks3Indexes =  peaks3Indexes.filter((el)=>el!=='na');
//Algorithm 1 sub4
let sub4Min = Math.min(...sub4);
let sub4Max = Math.max(...sub4);
mid = Math.floor(sub4.length / 2);
    nums = [...sub4].sort((a, b) => a - b);
 let sub4Avg = sub4.length % 2 !== 0 ? nums[mid] : (Number(nums[mid - 1]) + Number(nums[mid])) / 2;
 let sub4mid = (sub4Max + sub4Min)/2
var sub4Threshold = (sub4Avg  + sub4Max + sub4mid ) /3 ;
let peaks4 = [];
let peaks4Indexes=[];
for(let i=0;i<sub4.length-1;i++){
    if(sub4[i] > sub4Threshold && sub4[i] >= sub4[i - 1] && sub4[i] > sub4[i + 1]){
        peaks4.push(sub4[i]);
        peaks4Indexes.push(i)
    }
    else {
        peaks4.push(-100);
        peaks4Indexes.push('na')
    }
};
for(let i=0;i<peaks4.length-75 ;i++){
    let lastMax = sub4Threshold;
    let lastMaxIndex = 0;
        for(let j=i;j<i + 75;j++){
            if(peaks4[j] > sub4Threshold && peaks4[j] <= lastMax){
                peaks4[j] = -100;
                peaks4Indexes[j] = 'na';
            }
             if(peaks4[j] > sub4Threshold && peaks4[j] > lastMax){
                peaks4[lastMaxIndex] = -100;
                peaks4Indexes[lastMaxIndex] = 'na';
                lastMax = peaks4[j];
                lastMaxIndex = j;
            }
        }
};
peaks4 = peaks4.filter((el)=>el!=-100)
peaks4Indexes =  peaks4Indexes.filter((el)=>el!='na');
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
let sub1Alg2mid = (sub1Alg2Max + sub1Alg2Min)/2
var sub1Alg2Threshold = (sub1Alg2mid + sub1Alg2Min )/3 ;
let peaks1Alg2 = [];
let peaks1Alg2Indexes = [];
for(let i=1;i<sub1Alg2.length-1;i++){
    if(sub1Alg2[i] > sub1Alg2Threshold && sub1Alg2[i] >= sub1Alg2[i - 1] && sub1Alg2[i] > sub1Alg2[i + 1]){
        peaks1Alg2.push(sub1Alg2[i]);
        peaks1Alg2Indexes.push(i)
    }
    else {
        peaks1Alg2.push(-100);
        peaks1Alg2Indexes.push('na')
    }
}
for(let i=0;i<peaks1Alg2.length-75 ;i++){
    let lastMax = sub1Alg2Threshold;
    let lastMaxIndex = 0;
        for(let j=i;j<i + 75;j++){
            if(peaks1Alg2[j] > sub1Alg2Threshold && peaks1Alg2[j] <= lastMax){
                peaks1Alg2[j] = -100;
                peaks1Alg2Indexes[j] = 'na';
            }
            else if(peaks1Alg2[j] > sub1Alg2Threshold && peaks1Alg2[j] > lastMax){
                peaks1Alg2[lastMaxIndex] = -100;
                peaks1Alg2Indexes[lastMaxIndex] = 'na';
                lastMax = peaks1Alg2[j];
                lastMaxIndex = j;
            }
           
           
        }

};
peaks1Alg2 = peaks1Alg2.filter((el)=>el!=-100)
peaks1Alg2Indexes =  peaks1Alg2Indexes.filter((el)=>el!=='na');
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
 let sub2Alg2mid = (sub2Alg2Max + sub2Alg2Min)/2
 var sub2Alg2Threshold = (sub2Alg2Min + sub2Alg2mid)/3 ;
let peaks2Alg2 = [];
let peaks2Alg2Indexes = [];
for(let i=1;i<sub2Alg2.length-1;i++){
    if(sub2Alg2[i] > sub2Alg2Threshold && sub2Alg2[i] >= sub2Alg2[i - 1] && sub2Alg2[i] > sub2Alg2[i + 1]){
        peaks2Alg2.push(sub2Alg2[i])
        peaks2Alg2Indexes.push(i)
    }
    else {
        peaks2Alg2.push(-100)
        peaks2Alg2Indexes.push('na')}
}
for(let i=0;i<peaks2Alg2.length-200 ;i++){
    let lastMax = sub2Alg2Threshold;
    let lastMaxIndex = 0;
        for(let j=i;j<i + 200;j++){
            if(peaks2Alg2[j] > sub2Alg2Threshold && peaks2Alg2[j] <= lastMax){
                peaks2Alg2[j] = -100;
                peaks2Alg2Indexes[j] = 'na';
            }
           else if(peaks2Alg2[j] > sub2Alg2Threshold && peaks2Alg2[j] > lastMax){
                peaks2Alg2[lastMaxIndex] = -100;
                peaks2Alg2Indexes[lastMaxIndex] = 'na';
                lastMax = peaks2Alg2[j];
                lastMaxIndex = j;
            }
        }
};
peaks2Alg2 = peaks2Alg2.filter((el)=>el!=-100)
peaks2Alg2Indexes =  peaks2Alg2Indexes.filter((el)=>el!=='na');
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
let sub3Alg2mid = (sub3Alg2Max + sub3Alg2Min)/2
var sub3Alg2Threshold = (sub3Alg2mid + sub3Alg2Min )/3 ;
let peaks3Alg2 = [];
let peaks3Alg2Indexes = [];
for(let i=1;i<sub3Alg2.length-1;i++){
    if(sub3Alg2[i] > sub3Alg2Threshold && sub3Alg2[i] >= sub3Alg2[i - 1] && sub3Alg2[i] > sub3Alg2[i + 1]){
    peaks3Alg2.push(sub3Alg2[i]);
    peaks3Alg2Indexes.push(i)
    }
    else{
        peaks3Alg2.push(-100);
    peaks3Alg2Indexes.push('na');
    } 
}
for(let i=0;i<peaks3Alg2.length-75 ;i++){
    let lastMax = sub3Alg2Threshold;
    let lastMaxIndex = 0;
        for(let j=i;j<i + 75;j++){
            if(peaks3Alg2[j] > sub3Alg2Threshold && peaks3Alg2[j] <= lastMax){
                peaks3Alg2[j] = -100;
                peaks3Alg2Indexes[j] = 'na';
            }
           else if(peaks3Alg2[j] > sub3Alg2Threshold && peaks3Alg2[j] > lastMax){
                peaks3Alg2[lastMaxIndex] = -100;
                peaks3Alg2Indexes[lastMaxIndex] = 'na';
                lastMax = peaks3Alg2[j];
                lastMaxIndex = j;
            }
        }
};
    peaks3Alg2 = peaks3Alg2.filter((el)=>el!=-100)
peaks3Alg2Indexes =  peaks3Alg2Indexes.filter((el)=>el!=='na');
    

//algorithm2 sub4
let sub4Diff = [];
let sub4DoubleDiff = [];
let sub4DoubleDiffSquare = [];
for(let i = 0; i<sub4.length - 1;i++){
    sub4Diff[i] = sub4[i+1] - sub4[i];
}
for(let i = 0; i<sub4Diff.length - 1;i++){
    sub4DoubleDiff[i] = sub4Diff[i+1] - sub4Diff[i];
    sub4DoubleDiffSquare[i] = sub4DoubleDiff[i]**2
}
let sub4Alg2 = sub4DoubleDiffSquare;
let sub4Alg2Min = Math.min(...sub4Alg2);
let sub4Alg2Max = Math.max(...sub4Alg2);
 let sub4Alg2mid = (sub4Alg2Max + sub4Alg2Min)/2
 var sub4Alg2Threshold = (sub4Alg2mid + sub4Alg2Min )/3 ;
let peaks4Alg2 = [];
let peaks4Alg2Indexes = [];
for(let i=1;i<sub4Alg2.length-1;i++){
    if(sub4Alg2[i] > sub4Alg2Threshold && sub4Alg2[i] >= sub4Alg2[i - 1] && sub4Alg2[i] > sub4Alg2[i + 1]){
    peaks4Alg2.push(sub4Alg2[i]);
    peaks4Alg2Indexes.push(i)
    }
    else {
    peaks4Alg2.push(-100);
    peaks4Alg2Indexes.push('na')}
}
for(let i=0;i<peaks4Alg2.length-200 ;i++){
    let lastMax = sub4Alg2Threshold;
    let lastMaxIndex = 0;
        for(let j=i;j<i + 200;j++){
            if(peaks4Alg2[j] > sub4Alg2Threshold && peaks4Alg2[j] <= lastMax){
                peaks4Alg2[j] = -100;
                peaks4Alg2Indexes[j] = 'na';
            }
           else if(peaks4Alg2[j] > sub4Alg2Threshold && peaks4Alg2[j] > lastMax){
                   peaks4Alg2[lastMaxIndex] = -100;
                peaks4Alg2Indexes[lastMaxIndex] = 'na';
                lastMax = peaks4Alg2[j];
                lastMaxIndex = j;
                
            }
        }
};
peaks4Alg2 = peaks4Alg2.filter((el)=>el!=-100)
peaks4Alg2Indexes = peaks4Alg2Indexes.filter((el)=>el!=='na');
app.get("/getData", (request, response) => {
    response.send({sub1:sub1, peaks1:peaks1, sub1Alg2:sub1Alg2,peaks1Alg2:peaks1Alg2.filter((el)=>el>0),peaks1Indexes:peaks1Indexes,
        sub1Max:sub1Max, sub1Min:sub1Min, sub1Alg2Max:sub1Alg2Max, sub1Alg2Min:sub1Alg2Min,peaks1Alg2Indexes:peaks1Alg2Indexes,
        x1Max:sub1.length,x1Alg2Max:sub1Alg2.length,sub1Threshold:sub1Threshold,sub1Alg2Threshold:sub1Alg2Threshold,
        sub2:sub2, peaks2:peaks2, sub2Alg2:sub2Alg2,peaks2Alg2:peaks2Alg2.filter((el)=>el>0),peaks2Indexes:peaks2Indexes,
        sub2Max:sub2Max, sub2Min:sub2Min, sub2Alg2Max:sub2Alg2Max, sub2Alg2Min:sub2Alg2Min,peaks2Alg2Indexes:peaks2Alg2Indexes,
        x2Max:sub2.length,x2Alg2Max:sub2Alg2.length,sub2Threshold:sub2Threshold,sub2Alg2Threshold:sub2Alg2Threshold,
        sub3:sub3, peaks3:peaks3, sub3Alg2:sub3Alg2,peaks3Alg2:peaks3Alg2.filter((el)=>el>0),peaks3Indexes:peaks3Indexes,
        sub3Max:sub3Max, sub3Min:sub3Min, sub3Alg2Max:sub3Alg2Max, sub3Alg2Min:sub3Alg2Min,peaks3Alg2Indexes:peaks3Alg2Indexes,
        x3Max:sub3.length,x3Alg2Max:sub3Alg2.length,sub3Threshold:sub3Threshold,sub3Alg2Threshold:sub3Alg2Threshold,
        sub4:sub4, peaks4:peaks4, sub4Alg2:sub4Alg2,peaks4Alg2:peaks4Alg2.filter((el)=>el>0),peaks4Indexes:peaks4Indexes,
        sub4Max:sub4Max, sub4Min:sub4Min, sub4Alg2Max:sub4Alg2Max, sub4Alg2Min:sub4Alg2Min,peaks4Alg2Indexes:peaks4Alg2Indexes,
        x4Max:sub4.length,x4Alg2Max:sub4Alg2.length,sub4Threshold:sub4Threshold,sub4Alg2Threshold:sub4Alg2Threshold,
    })
});
app.listen(PORT, () => console.log("The server is started"));