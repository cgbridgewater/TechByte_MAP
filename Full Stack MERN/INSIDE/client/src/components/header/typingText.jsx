import React, { useEffect } from 'react';

const TypingText = () => {
    useEffect(() => {
        runTyping();
    }, []);

    const TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';
        var that = this;
        var delta = 275;
        if (this.isDeleting) {
            delta = 100;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function() {
            that.tick();
        }, delta);
    };

const runTyping = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    var css = document.createElement('style');
    css.innerHTML =
        '.txt-rotate { border-right: 0.08em solid green, animation: blink-caret 0.75s step-end infinite }';
    document.body.appendChild(css);
};

    return (
        <div className="RotatingText">
            <h1 className="TypingText">
                Part: &nbsp;
                <span
                    className="txt-rotate"
                    data-period="2000"
                    data-rotate='["GOLFER", "MOUNTAIN BIKER", "HUSBAND"]'
                ></span>
            </h1>
        </div>
    );
};

export default TypingText;