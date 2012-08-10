// dashboard.js

// Copyright 2012 Phillip Quiza, Andrei Nagornyi

/**
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

define([
  "jquery",
  "underscore",
  "backbone",
  "views/collections",
  "views/shards"
], function( $, _ , Backbone , CollectionsView , ShardsView ){

  var DashboardView = Backbone.View.extend({

    initialize : function(options){
      $("#leftMargin").addClass("span6");
      $("#rightMargin").addClass("span6");
      this.eventAgg = options.eventAgg;
      this.eventAgg.bind("router:clean" , this.destroy , this);
      this.collectionsView = new CollectionsView({ el : $("#leftMargin") , 
                                                   model : this.model , 
                                                   eventAgg : options.eventAgg , 
                                                   parent : false , 
                                                   slider : false });
      this.shardsView = new ShardsView({ el : $("#rightMargin") , 
                                         model : this.model , 
                                         eventAgg : options.eventAgg , 
                                         parent : false , 
                                         slider : false  });
    } ,
    render : function(){
      this.collectionsView.render();
      this.shardsView.render();
    } ,
    destroy : function(){
      this.eventAgg.unbind("router:clean", this.destroy);
      $("#leftMargin").removeClass("span6");
      $("#rightMargin").removeClass("span6");
    }
  });

  return DashboardView;  

});