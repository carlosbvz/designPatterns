
'use strict';
var APP = window.APP = window.APP || {};
APP.checkBoxModule = (function(){

    // cacheDOM   ==> No jQuery in this case :P
    let addBtn = document.getElementById( "addNewObserver" ),
        container = document.getElementById( "observersContainer" ),
        controlCheckbox = document.getElementById( "mainCheckbox" );

        // The Observer 
        function Observer() {
            this.update = function() {
                // ...
            }
        }
        // Extend an object with an extension
        const extend = ( obj, extension ) => {
            for ( let key in extension ){
                obj[key] = extension[key];
            }
        }
        const addNewObserver = () => {
            // Create a new checkbox to be added
            let check = document.createElement( "input" );
            check.type = "checkbox";
            
            // Extend the checkbox with the Observer class
            extend( check, new Observer() );
            
            // Override with custom update behaviour
            // This is the available API
            check.update = function( value ){
                this.checked = value;
            };
            
            // Add the new observer to our list of observers
            // for our main subject
            controlCheckbox.addObserver( check );
            
            // Append the item to the container
            container.appendChild( check );
        }
        const bindEventsToUI = () => {
            // Clicking the checkbox will trigger notifications to its observers
            controlCheckbox.onclick = (e) => {
                controlCheckbox.notify( controlCheckbox.checked );
            };
            
            addBtn.onclick = addNewObserver;
        }

        const init = () => {
            // Extend the controlling checkbox with the Subject class
            extend( controlCheckbox, new Subject() );
            bindEventsToUI();
        }

        return {
        init,
    };

}());

APP.checkBoxModule.init();