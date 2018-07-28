import time
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters(host = 'localhost'))

channel = connection.channel()

# channel.queue_declare(queue='hello')

channel.queue_declare(queue='task_queue'
                        ,durable = True
                        )

print(' [*] Waiting for messages. To exit press CTRL+C')

def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)
    time.sleep(body.count(b'.'))
    print(" [x] Done")
    ch.basic_ack(delivery_tag = method.delivery_tag)

channel.basic_qos(prefetch_count=1)

# telling RMQ that this callback function should receive message from our hello queue
channel.basic_consume(callback,
                        queue='task_queue',
                        # no_ack=True
                        )

channel.start_consuming()
