var myForm, formData;
		
function doOnLoad() {
    formData = [
        {type: "settings", position: "label-left", labelWidth: 70, inputWidth: 150},
        {type: "block", width: "auto", blockOffset: 0, list: [
            {type: "label", label: "Download Text Document", labelWidth: "auto", offsetTop: 20},
            {type: "combo", label: "Name", name: "name", options: [
                {value: "Trinidad Ellwood", text: "Trinidad Ellwood"},
                {value: "Travis Milne", text: "Travis Milne", selected: true},
                {value: "Latrice Bowman", text: "Latrice Bowman"},
                {value: "Trisha Cooper", text: "Trisha Cooper"},
                {value: "Elliott Campbell", text: "Elliott Campbell"},
                {value: "Vivienne Connolly", text: "Vivienne Connolly"}
            ]},
            {type: "combo", label: "Country", name: "country", comboType: "image", comboImagePath: "../common/imgs_combo/", options: [
                {value: "Denmark", img: "denmark.png", text: "Denmark"},
                {value: "Finland", img: "finland.png", text: "Finland", selected: true},
                {value: "Germany", img: "germany.png", text: "Germany"},
                {value: "Italy", img: "italy.png", text: "Italy"}
            ]},
            {type: "checkbox", label: "I agree with terms and conditions", checked: false, position: "label-right", labelWidth: "auto", list: [
                {type: "button", name: "download_txt", value: "Download", offsetLeft: 45}
            ]}
        ]},
        {type: "newcolumn"},
        {type: "block", width: "auto", blockOffset: 30, list: [
            {type: "label", label: "Download Image", labelWidth: "auto", offsetTop: 20},
            {type: "checkbox", label: "aquarium.jpg", checked: false, position: "label-right", labelWidth: "auto", list: [
                {type: "button", name: "download_img", value: "Download", offsetLeft: 45}
            ]}
        ]}
    ];
    
    myForm = new dhtmlXForm("myForm", formData);
    myForm.getCombo("name").sort("asc");
    
    myForm.attachEvent("onButtonClick", function(name) {
        if (name == "download_txt") {
            downloadFile("../common/download.php", this.getFormData());
        }
        if (name == "download_img") {
            downloadFile("../common/download.php", {image: "y"});
        }
    });
}

var downloadFrame;
function downloadFile(url, params) {
    
    // create iframe once if needed
    if (downloadFrame == null) {
        downloadFrame = document.createElement("iframe");
        downloadFrame.className = "download_iframe";
        downloadFrame.name = "download_frame";
        downloadFrame.border = downloadFrame.frameBorder = 0;
        document.body.appendChild(downloadFrame);
    }
    
    // create form for download request
    var downloadForm = document.createElement("FORM");
    downloadForm.action = url;
    downloadForm.method = "POST";
    downloadForm.target = "download_frame";
    document.body.appendChild(downloadForm);
    
    // add params to form
    for (var a in params) {
        var input = document.createElement("INPUT");
        input.type = "hidden";
        input.name = a;
        input.value = params[a];
        downloadForm.appendChild(input);
        input = null;
    }
    
    // submit form
    downloadForm.submit();
    
    // clear form
    window.setTimeout(function(){
        document.body.removeChild(downloadForm);
        downloadForm = null;
    }, 1);
    
};