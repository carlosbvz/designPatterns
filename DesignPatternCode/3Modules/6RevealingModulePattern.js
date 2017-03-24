var myRevealingModule = (function () {
 
        let privateVar = "Chuck Norris",
            publicVar = "Hey there!";
 
        // Arrow Functions, cool?
        privateFunction = () => {
            console.log( "Name: " + privateVar );
        }
 
        publicSetName = ( strName ) => {
            privateVar = strName;
        }
 
        // Regular functions
        function publicGetName() {
            privateFunction();
        }
 
        /** ===== API =====
         * Reveal public pointers to
         * private functions and properties
         * This is the inhancement it has compared to the regular modules
         */ 
        return {
            // Using Alias
            setName: publicSetName,
            greeting: publicVar,
            getName: publicGetName,
            // short-hand (?)
            publicSetName
            
        };
 
    })();
 
myRevealingModule.setName( "Charlie Brown" );
myRevealingModule.getName();

myRevealingModule.publicSetName( "Bills Sama" );
myRevealingModule.getName();