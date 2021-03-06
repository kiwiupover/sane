// 'use strict';
// var assert = require('../helpers/assert');
// var Command = require('../../lib/models/command');
// var MockUI = require('../helpers/mock-ui');

// var command;
// var called = false;

// beforeEach(function() {
//   var analytics = {
//     track: function() {
//       called = true;
//     }
//   };
//   var FakeCommand = Command.extend({
//     name: 'fake-command',
//     run: function() {}
//   });
//   command = new FakeCommand({
//     ui: new MockUI(),
//     analytics: analytics,
//     project: { isEmberCLIProject: function(){ return true; }}
//   });
// });
// afterEach(function() {
//   command = null;
// });
// describe('analytics', function() {
//   it('track gets invoked on command.validateAndRun()', function() {
//     return command.validateAndRun([]).then(function() {
//       assert.ok(called, 'expected analytics.track to be called');
//     });
//   });
// });