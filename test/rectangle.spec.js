'use strict';

let chai = require('chai'),
  path = require('path');

// Use Should-Style assertions
chai.should();

let Rectangle = require(path.join(__dirname, '..', 'rectangle'));

describe('Rectangle', () => {
  	describe('#constructor', () => {
  		it('requires arguments greater than zero', () => {
  			() => {
  				new Rectangle(0, -1)
  			}.should.throw(Error);

  			() => {
  				new Rectangle(0, 0);
  			}.should.throw(Error);

  			() => {
  				new Rectangle(-5, 0);
  			}.should.throw(Error);

  			() => {
  				new Rectangle(-5, 4);
  			}.should.throw(Error);

  			() => {
  				new Rectangle(3, 4);
  			}.should.not.throw(Error);
  		});

  		it('requires two numerical arguments', () => {
	  		() => {
	  			new Rectangle();
	  		}.should.throw(Error);

	  		() => {
	  			new Rectangle(1.0);
	  		}.should.throw(Error);

	  		() => {
	  			new Rectangle(1, "12");
	  		}.should.throw(Error);

	  		() => {
	  			new Rectangle("foo", "bar");
	  		}.should.throw(Error);

	  		() => {
	  			new Rectangle(5, 7);
	  		}.should.not.throw(Error);
  		});
  	});

  	describe('#width', () => {
	    let rectangle;

	    beforeEach(() => {
	      rectangle = new Rectangle(10, 20);
	    });

	    it('returns width', () => {
	    	rectangle.width.should.equal(10);
	    });

	    it('can be changed', () => {
	    	rectangle.width = 30;
	    	rectangle.width.should.equal(30);
	    });

	    it('only accepts numbers', () => {
	    	() => {
	    		rectangle.width = "hello";
	    	}.should.throw(Error)
	    });
 	});

  	describe('#height', () => {
	    let rectangle;

	    beforeEach(() => {
	      rectangle = new Rectangle(10, 20);
	    });

	    it('returns height', () => {
	    	rectangle.height.should.equal(20);
	    });

	    it('can be changed', () => {
	    	rectangle.height = 30;
	    	rectangle.height.should.equal(30);
	    });

	    it('only accepts numbers', () => {
	    	() => {
	    		rectangle.height = "hello";
	    	}.should.throw(Error)
	    });
 	});

 	describe('#area', () => {
 		let rectangle;

 		beforeEach(() => {
 			rectangle = new Rectangle(5,6);
 		});

 		it('should compute area', () => {
 			rectangle.area.should.equal(30);
 		});

 		it('cannot be modified', () => {
 			() => {
 				rectangle.area = 40;
 			}.should.throw(Error);
 		});
 	});

 	describe('#circumference', () => {
 		let rectangle;

 		beforeEach(() => {
 			rectangle = new Rectangle(4,5);
 		});

 		it('should compute the circumference', () => {
 			rectangle.circumference.should.equal(18);
 		});

 		it('cannot be modified', () => {
 			() => {
 				rectangle.circumference = 10;
 			}.should.throw(Error);
 		});
 	});
});
