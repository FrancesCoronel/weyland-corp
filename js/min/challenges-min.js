$(document).ready(function(){Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ","prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");var e=Parse.User.current();$("#criticalthinkingbutton").click(function(){e.set("currentChallenge","Critical Thinking"),e.save(null,{success:function(e){alert("New object created with objectId: "+e.id)}}),e.fetch()}),$("#timetrialbutton").click(function(){e.set("currentChallenge","Time Trial"),e.save(null,{success:function(e){alert("New object created with objectId: "+e.id)}}),e.fetch()}),$("#recognitionbutton").click(function(){e.set("currentChallenge","Recognition"),e.save(null,{success:function(e){alert("New object created with objectId: "+e.id)}}),e.fetch()}),$("#definitionsbutton").click(function(){e.set("currentChallenge","Definition"),e.save(null,{success:function(e){alert("New object created with objectId: "+e.id)}}),e.fetch()}),$("#aboveandbeyondbutton").click(function(){e.set("currentChallenge","Above and Beyond"),e.save(null,{success:function(e){alert("New object created with objectId: "+e.id)}}),e.fetch()})});