	var midiInput;
	var midiOutput;
	var channelCount = -1;
	var webMidiEnabled = 0;
	var indicatorLight = -1;
	var displayEnabled = -1;
	var history = [];

	

	var socket = io();
	if(socket) {
    var delivery = new Delivery(socket);
		// Display options
	}

  

	socket.on('loadTrack', function(trackID) {
		
	})

	socket.on('syncLibrary', function(awsBucketURL) {
		//download all tracks in aws bucket to local storage on disk
	})
	

	socket.on('setCuePoint', function(trackID, time) {
		
	}
						
	socket.on('cue', function(channel) {
		
	}


	socket.on('receipt', function(receiptInfo) {
		console.log('user is in group '+receiptInfo.group)
		
		// loads appropriate ui depending on user type
		if(receiptInfo.group == -1) loadAdminInfoInterface();
		else loadServantInfoInterface();
	})
	

	
    
    function loadAudio() {
        
    }
    
    function transferAudio(audioFile) {
        delivery.send({
          name: 'sample-image.jpg',
          path : './sample-image.jpg'
        });
    }
	
	// Attempts to activate webMidi and sets up, otherwise loads audio files
	function enableMidi(role) {
		WebMidi.enable(function (err) {
  
    		if (err) {
      			console.log("WebMidi could not be enabled.", err);
				loadSounds();
    		} else {
						webMidiEnabled = 1;
      			console.log("WebMidi enabled!");
      			console.log(WebMidi.inputs);
      			console.log(WebMidi.outputs);
				
				
				if(role=='admin') {
					// Sets up select dropdown for midi inputs and channels
					var midiInputs = document.getElementById('midi_input_list')
					var options = [];
		  			for(var d=0; d<WebMidi.inputs.length; d++) {
		  				options.push(WebMidi.inputs[d].name);
					}
					if(options.length>0) midiInput = WebMidi.getInputByName(options[0])
					for (var i = 0; i < options.length; i++) {
		    			var option = document.createElement('option');
		    			option.value = options[i];
		    			option.innerHTML = options[i];
		    			midiInputs.appendChild(option);
		  			}

					midiInputs.onchange = function() {
						midiInput = WebMidi.getInputByName(this.value);
  					}
					var channels = document.getElementById('channel_list')
					channels.onchange = function() {
						channelCount = this.value;
						console.log(channelCount)
					}
		  		}
				
				if(role=='servant') {
					// sets up select dropdown for midi outputs 
					var midiOutputs = document.getElementById('midi_output_list')
					var options = [];
		  			for(var d=0; d<WebMidi.outputs.length; d++) {
		  				options.push(WebMidi.outputs[d].name);
					}
					for (var i = 0; i < options.length; i++) {
		    			var option = document.createElement('option');
		    			option.value = options[i];
		    			option.innerHTML = options[i];
		    			midiOutputs.appendChild(option);
		  			}
					if(options.length>0) midiOutput = WebMidi.getOutputByName(options[0])
					midiOutputs.onchange = function() {
						midiOutput = WebMidi.getOutputByName(this.value);
  					}
				}
				
			}
    	});
	}



});