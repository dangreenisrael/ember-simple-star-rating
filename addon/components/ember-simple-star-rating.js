import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['star-rating'],
    tagName: 'span',
    ratings:{
        1 : "fa-star-o",
        2 : "fa-star-o",
        3 : "fa-star-o",
        4 : "fa-star-o",
        5 : "fa-star-o",
    },
    max: 5,
    rating: 0,
    actions: {
        setRating: function (rating) {
            this.set('rating', rating);
            //noinspection JSUnresolvedFunction
            this.setStars(rating);
            if (this.get('onUpdate')){
               this.get('onUpdate')(rating);
            }
        },
    },
    setStars: function (count) {
        let max = this.get('max');
        let ratings = {};
        for(let i =1; i <= max ; i++){
            if ( i <= count){
                ratings[i] = "fa-star" ;
            } else{
                ratings[i] = "fa-star-o" ;
            }
        }
        this.set('ratings', ratings);
    },
    didReceiveAttrs() {
        this._super(...arguments);
        this.setStars( this.get('rating') );
    }
});
