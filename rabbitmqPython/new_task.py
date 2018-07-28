import sys
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))

channel = connection.channel()

# print(channel)
# channel.queue_declare(queue= 'hello') #defined a queue named "hello"

#to make durable, put durable as True, also you cannot redefine the durability of a queue already defined.
channel.queue_declare(queue = 'task_queue'
                        , durable = True
                        )

message = ' '.join(sys.argv[1:]) or "Hello World!"

# channel.basic_publish(exchange='',
#                     routing_key='hello',
#                     body=message)

channel.basic_publish(exchange=''
                        ,routing_key="task_queue"
                        ,body=message
                        ,properties=pika.BasicProperties(
                            delivery_mode=2, #make message persistent
                        ))

print(" [x] Sent %r" % message)

connection.close()