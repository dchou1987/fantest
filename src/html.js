import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
    render() {
        return (
            <html {...this.props.htmlAttributes}>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    {this.props.headComponents}
                </head>
                <body {...this.props.bodyAttributes}>
                    {this.props.preBodyComponents}
                    <div
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=628330b04bd59fd2ec54e6ca" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
                    {/* <script src="/assets/js/algofan.js" type="text/javascript" crossOrigin="anonymous"></script> */}
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
                    <script
                          dangerouslySetInnerHTML={{
                            __html: `
                            var tricksWord = document.getElementsByClassName("tricks");
                            for (var i = 0; i < tricksWord.length; i++) {
                            var wordWrap = tricksWord.item(i);
                           
                            }
                            var tricksLetter = document.getElementsByClassName("tricksword");
                            for (var i = 0; i < tricksLetter.length; i++) {
                            var letterWrap = tricksLetter.item(i);
                            letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                            }
                            function switchHeadlines() {
                                    let activeHeadline = $('.headline_text.tricks.active');
                                    if (activeHeadline.next().length > 0) {
                                      activeHeadline.next().addClass('active');
                                  } else {
                                      $('.headline_text.tricks').eq(0).addClass('active');
                                  }
                                  activeHeadline.removeClass('active');
                            }
                            function createAnimation() {
                            var tl = anime.timeline({
                              loop: true,
                              autoplay: true
                            });
                            tl
                              .add({
                                targets: '.headline_text.active .letter',
                                translateY: [100,0],
                                translateZ: 0,
                                opacity: [0,1],
                                easing: "easeOutExpo",
                                duration: 800,
                                delay: (el, i) => 300 + 30 * i
                              }).add({
                                targets: '.headline_text.active .letter',
                                translateY: [0,-100],
                                opacity: [1,0],
                                easing: "easeInExpo",
                                duration: 800,
                                delay: (el, i) => 100 + 30 * i,
                              });
                            }
                            createAnimation();
                                `,
                          }}
                    />
                </body>
            </html>
        )
    }
}

// HTML.propTypes = {
//     htmlAttributes: PropTypes.object,
//     headComponents: PropTypes.array,
//     bodyAttributes: PropTypes.object,
//     preBodyComponents: PropTypes.array,
//     body: PropTypes.string,
//     postBodyComponents: PropTypes.array,
// }