class Producer{

	constructor(configParams){
		this;
	}

	_initClient(){
		this.client = new kafka.KafkaClient(this.options);
	}

	_bindListeners(cb, deferred){
        this.producer.on('ready', () => {
            L.log('Producer is ready! You can publish messages now.');
            this._prepareResponse(cb, deferred, null, CONFIG.MESSAGES.PRODUCER_READY);
        });

        this.producer.on('error', (err) => {
            L.error('Error in producer: ', err);
            this._prepareResponse(cb, deferred, err, null);
        });

        this.producer.on('SIGTERM', function() {
            L.log('Shutdown producer!');
            this._prepareResponse(cb, deferred, null, CONFIG.MESSAGES.PRODUCER_STOPPED);
        });
	}

	_prepareRepsonse(cb, deferred, error, data){
		error ? deferred.reject(error) : deferred.resolve(data);
		if(cb && cb !== 'undefined'){
			return error ? cb(error) : cb(null, data);
		}
	}

	initProducer(producerType, cb){
		let deferred = Q.defer();
		if(!(producerType === 'simple' || producerType === 'high')){
			L.error('initProducer: ', CONFIG.MESSAGES.PRODUCER_TYPE);
			this._prepareRepsonse(cb, deferred, CONFIG.MESSAGES.PRODUCER_TYPE);
		}
		else{
			this.producerType = producerType;
			try{
				this._initClient();
				this.producer = (this.producerType === 'simple') ?
					new kafka.Producer(this.client, this.producerOptions):
					new kafka.HighLevelProducer	(this.client, this.producerOptions);
				this._bindListeners(cb, deferred);	
			}
			catch(error){
				L.error('initProducer: ', error);
				this._prepareRepsonse(cb, deferred, error, null);
			}
		}
		return deferred.promise;
	}

	publishData(){

	}

	createTopics(){

	}

}

module.exports = Producer;