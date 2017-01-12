describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubbleSort([]) ).toEqual( [] );
  });

  it('sorts a numeric array', function(){
    expect(bubbleSort([10,5,16,1,20]) ).toEqual( [1,5,10,16,20] );
  });

  it('sorts a numeric array with negatives', function(){
    expect(bubbleSort([10,-5,16,-1,20]) ).toEqual( [ -5, -1, 10, 16, 20 ] );
  });
  
  it('sorts a numeric array with decimals', function(){
    expect(bubbleSort([10,.5,16,.1,20]) ).toEqual( [0.1, 0.5, 10, 16, 20] );
  });

  it('sorts a character array', function(){
    expect(bubbleSort(['b','c','a','d']) ).toEqual( ['a','b','c','d'] );
  });

  it('swaps correct amount of times', function(){
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([10,5,16,1,20]);
    expect(swap.calls.count()).toEqual(4);
  });
});

