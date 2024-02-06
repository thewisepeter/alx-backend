const kue = require('kue');
const queue = kue.createQueue();

const jobData = {
	  phoneNumber: '1234567890',
	  message: 'Hello from your notification!',
};

const job = queue.create('push_notification_code', jobData)
  .save((err) => {
	      if (err) {
		            console.error('Notification job creation failed:', err);
		            return;
		          }
	      console.log('Notification job created:', job.id);
	    });

job.on('complete', () => {
	  console.log('Notification job completed');
});

job.on('failed', () => {
	  console.log('Notification job failed');
});
