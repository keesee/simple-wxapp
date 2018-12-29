// Class objective:

// 0.  introduce yourself.  tell them how you use react at work.  why did you and your company pick it?  how is it a valuable skill? (5-10 min)
// 1. add git to the project (they haven't commited yet)  , (< 5min)
// 2. clean up the app abit to prepare to start writing the weather logic wed and next saturday.  clean up and review App.js (30-45) 
// 3. review component creation, ||, if -  first write a function then turn it into a component (calculate area) (30min - 45min)
// 4. styles (CSS) in react (20 to 30 min)
// 5. look at real weather data (if there's time) (20 -30min)



// 1.   we are going to do some clean up.  need to git commit first.  initialize, stage (add), commit
//      open the weather app we've been working on
//      git init
//      git add .
//      git commit -m 'a message'  (they can use the vs code ui as well)

// 2.   Clean up the project and review where we are.  
//      Review each line of App.js with them and clean up what is not needed.  this version of the file is commented.  (you can send it to them if you'd like)
//          review syntax for creating a class in JS  ->  class xxxxx extends React.Component
//          review constuctor and setting inital state
//          review component basic lifecycle  ->  willMount, didMount, willUnmount
//      remove the unneeded files created by create-react-app.  app.test, svgs, app.css ( remove the imports in App.js as well)
//      git commit again.  -m "clean up.  Ready to code our weather app!"

// 3.   Re-enforce Component creation. 
//      create file Review.js in project root
//      Review by having them create a function that calculates area (w*h). they will then turn it into a component  
//      give them 10 or so min to try on thier own, then do it on the screen so they can follow you.  

        // Introduce  if (!w) { } to be sure there is a width provided
        // reintroduce ||  ( to set the width if no height is provided )
        const calcArea = function(w,h) { 
            // Make sure we atleast have a width
            
            // THIS IS NEW FOR THEM!
            if (!w) {
                return false // this could be an error but using false for the time being.
            }
            // THIS IS NEW FOR THEM! END
            
            const width = w
            const height = h || w // if no height use the width (its a square)

            return width*height
        }




// 3a.  In review.js Write the function above as a component (code below)
//      give them 5-10 or so min to try on thier own, then do it on the screen so they can follow you.  
//      Export it at the bottom of the file
//      import it into App.js and use it (below the Temp components on line 118). 
//              <AreaCalc width={20} height={30} /> // with height
//              <AreaCalc width={20} /> // without height


        class AreaCalc extends React.Component { // 3a
            render() {

                // sure we have a width and a height
                // if we don't render an error
                if (!this.props.width) {
                    return <div> Error.  Width is Required </div>
                }

                const squareWidth = this.props.width
                const squareHeight = this.props.height || this.props.width // if no height, use the width (its a square)
                const squareArea = squareWidth * squareHeight

                // make sure we have Mass and accerlation 
                return <div>
                    <div>
                        <span> The area of this square is:  </span>
                        <span> {squareArea} </span>
                    </div>
                </div>
            }
        }


// 4.   Introduce styles in Javascript (modified AreaCalc Below)
//      height, width, background-color
//      background-color (in css) vs backgroundColor (in react)
//      have them modify their AreaCalc component.  add a square and style it with the width and height ---- lines (107-109)
//      show other examples of how they could style the box.  spend 10 or so minutes showing them a few css properties.  
class AreaCalc extends React.Component { // 3a
    render() {

        // sure we have a width and a height
        // if we don't render an error
        if (!this.props.width) {
            return <div> Error.  Width is Required </div>
        }

        const squareWidth = this.props.width
        const squareHeight = this.props.height || this.props.width // if no height, use the width (its a square)
        const squareArea = squareWidth * squareHeight

        // make sure we have Mass and accerlation 
        return <div>
            <div>
                <span> The are of this square is:  </span>
                <span> {squareArea} </span>
            </div>
            <div>
                <div style={{backgroundColor: '#000', width: squareWidth, height: squareHeight}}></div>
            </div>
        </div>
    }
}

// 5.  Apis
// its time to start playing with real data!  they've been using mock services or data they generate to date
// explain query strings  
//      https://domain.com?key=value,key2=value2

// explore the real weather data in the WxDataExample folder.
// send the 2 files out on weixin.  (i added you to the group)
// give them 5-10 minutes to explore the json objects.  
    // review the weather.js file together. (today's London weather)
    // review the forcast.js (today's chengdu 3-5 day forecast)
    // TRY TO GET THEM EXCITED ABOUT USING REAL DATA AND THE AMOUNT OF DATA AVAILBLE TO THEM FOR FREE!
    // Shate any apis that you like using with them if there's time left. 