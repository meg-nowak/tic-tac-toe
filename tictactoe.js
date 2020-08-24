const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

function loadBoard(){
    svg.setAttribute("viewBox", "0 0 300 300");
    for(let i = 0; i <4; i++){
        let stroke = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        //<rect width="30" height = "260" rx = "10" ry ="10" stroke = "#4099FF" stroke-width = "2" fill = "#094f9e"/>
        stroke.setAttribute("stroke", "#4099FF");
        stroke.setAttribute("stroke-width", "2");
        stroke.setAttribute("fill", "#094f9e");
        stroke.setAttribute("rx", "10");
        stroke.setAttribute("ry", "10");
        if(i/2.0<1){
            stroke.setAttribute("width", "30");
            stroke.setAttribute("height", "260");
            stroke.setAttribute("y","20");
            if(i===0){
                stroke.setAttribute("x","85");
            }else{
                stroke.setAttribute("x","185");
            }
        }else{
            stroke.setAttribute("width", "260");
            stroke.setAttribute("height", "30");
            stroke.setAttribute("x","20");
            if(i===2){
                stroke.setAttribute("y","85");
            }else{
                stroke.setAttribute("y","185");
            }
        }
        svg.appendChild(stroke);
    }
}

function placeCross(node){
    let row = Math.floor(node/3.0001);
    let col = (node%3)-1;
    if(col===-1){
        col=2;
    }
    let criss = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    criss.setAttribute("width","10");
    criss.setAttribute("height","50");
    criss.setAttribute("fill","black");
    let cross = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    cross.setAttribute("width","50");
    cross.setAttribute("height","10");
    cross.setAttribute("fill","black");
    cross.setAttribute("x","-20");
    cross.setAttribute("y","20");
    let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    //gxd = g x displacement. gyd = g y displacement.
    let gxd = ((row*95)+60).toString();
    let gyd = ((col*95)+10).toString();
    g.setAttribute("transform",("translate("+gyd+", "+gxd+") rotate(45 60 60)"));
    g.appendChild(criss);
    g.appendChild(cross);
    svg.appendChild(g);
    let svgCont = document.getElementById("svgContainer");
    svgCont.appendChild(svg);
}

function placeNought(node){
    let row = Math.floor(node/3.0001);
    let col = (node%3)-1;
    if(col===-1){
        col=2;
    }
    let maskInner = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    maskInner.setAttribute("cx","50");
    maskInner.setAttribute("cy","50");
    maskInner.setAttribute("r","25");
    maskInner.setAttribute("fill","white");
    maskInner.setAttribute("stroke","white");
    maskInner.setAttribute("stroke-width","2");
    let maskOuter = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    maskOuter.setAttribute("cx","50");
    maskOuter.setAttribute("cy","50");
    maskOuter.setAttribute("r","10");
    maskOuter.setAttribute("fill","black");
    let mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
    mask.appendChild(maskInner);
    mask.appendChild(maskOuter);
    let outerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    outerCircle.setAttribute("cx","50");
    outerCircle.setAttribute("cy","50");
    outerCircle.setAttribute("r","25");
    outerCircle.setAttribute("fill","red");
    outerCircle.setAttribute("stroke","black");
    outerCircle.setAttribute("stroke-width","2");
    outerCircle.setAttribute("mask","2");
    let svgCont = document.getElementById("svgContainer");
    svgCont.appendChild(svg);
}

loadBoard();
let svgCont = document.getElementById("svgContainer");
svgCont.appendChild(svg);