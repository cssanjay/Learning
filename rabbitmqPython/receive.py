import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))

channel = connection.channel()

channel.queue_declare(queue='hello')


def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)

# telling RMQ that this callback function should receive message from our hello queue
channel.basic_consume(callback,
                        queue='hello',
                        no_ack=True)

print(' [*] Waiting for messages, To exit press CTRL+C')

channel.start_consuming()
