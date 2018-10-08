let kbMoodleGenerate = document.getElementById("kb_moodle_generate");

let moodleLinkEle = (<HTMLInputElement>document.getElementById("kb_moodle_link"));
let moodleDescEle = (<HTMLInputElement>document.getElementById("kb_moodle_desc"));

let kbStatus = document.getElementById("kb_status");

let kbTextArea = document.getElementById("kb_textarea");

class Article {
    htm: string;
    constructor(public moodleLink: string, public moodleDetail: string) {
        this.htm = 
        `
        <!-- Start -->

        <div style="font-family:Arial,Helvetica,sans-serif;background:#6F2050;border:1px solid #6F2050;padding:5px 10px;">
        <span style="color:#FFFFFF"><strong>Article owned by team:</strong></span>
            <span style="color:#fff">Learning and Teaching Development</span>
        </div>
        <span>&nbsp;</span>
        <div style="font-family:Arial,Helvetica,sans-serif;background:#6F2050;border:1px solid #6F2050;padding:5px 10px;">
            <span style="color:#FFFFFF"><strong>Brief:</strong></span>
        </div>
        <p><span style="font-family:Arial,Helvetica,sans-serif;color:#000">${moodleDetail}</span></p>

        <div style="background:#6F2050;border:1px solid #6F2050;padding:5px 10px;">
            <span style="color:#fff"><strong>Detail:</strong></span>
        </div>
        <p><span style="color:#000">Click here to be taken the Moodle course on this topic: <a href="${moodleLink}">${moodleLink}</a></span></p>

        <div style="font-family:Arial,Helvetica,sans-serif;background:#6F2050;border:1px solid #6F2050;padding:5px 10px;">
            <span style="color:#FFFFFF"><strong>Further information:</strong></span>
        </div>
        <p>Contact: <span style="color:#000">Learning and Teaching Development</span> through case creation<span style="font-family:arial,helvetica,sans-serif">.</span></p>
        
        <!-- End -->
        `;
    }
}

function generateForm() {
    let moodleLink = moodleLinkEle.value;
    let moodleDesc = moodleDescEle.value;
    if(moodleLink == "" || moodleDesc == "") {
        kbStatus.innerText = "Please fill forms";
        return;
    }
    moodleLinkEle.value = "";
    moodleDescEle.value = "";
    let a = new Article(moodleLink, moodleDesc);
    kbTextArea.innerText = a.htm;
}

kbMoodleGenerate.onclick = function(e) { generateForm() };
