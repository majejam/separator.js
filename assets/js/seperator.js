class Seperator{
    constructor(_text, _container){
        this.text = _text
        this.container = _container
        this.letter = new Array()
        this.color = new Array()
        this.length = this.text.innerHTML.length
        this.increment = 0
        this.printText()
        this.seperateLetter()
        this.clearText()
        this.makeColorGradient(.3,.3,.3,0,2,4,230,25,this.length);
        this.createSeperateDiv()
        console.log(this.color);
        
    }
    
    seperateLetter(){
        for (let index = 0 ; index < this.length ; index++) {
            this.letter.push(this.text.innerHTML[index])
        }
        console.log(this.letter) 
    }

    clearText(){
        this.text.innerHTML = ''
    }

    printText(){
       console.log(this.text.innerHTML)   
    }

    createSeperateDiv(){
        for (let index = 0; index < this.length; index++) {
            this.increment += 200
            let span = document.createElement("span")
            span.className = "animation"
            span.style.color = this.color[index]
            //span.style.color = "#FFFFFF"
            span.style.animationDelay = `${this.increment}ms`
            span.innerHTML = this.letter[index] 
            this.container.appendChild(span)    
        }
    }
    RGB2Color(r,g,b)
    {
    return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
    }
    byte2Hex(n)
    {
      var nybHexString = "0123456789ABCDEF";
      return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
    }
    makeColorGradient(frequency1, frequency2, frequency3,
        phase1, phase2, phase3,
        center, width, len)
    {
    if (center == undefined)   center = 128;
    if (width == undefined)    width = 127;
    if (len == undefined)      len = 50;
    
    for (var i = 0; i < len; ++i)
    {
    var red = Math.sin(frequency1*i + phase1) * width + center;
    var grn = Math.sin(frequency2*i + phase2) * width + center;
    var blu = Math.sin(frequency3*i + phase3) * width + center;
    this.color.push(this.RGB2Color(red,grn,blu))
    }
    }
}


let text_html = document.querySelector('.my__text')
let container_html = document.querySelector('.main__container')
let seperator = new Seperator(text_html,text_html)
    

