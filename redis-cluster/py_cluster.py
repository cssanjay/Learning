from rediscluster import StrictRedisCluster
import random


startup_nodes = [{"host": "localhost", "port": "9001"}]


area_code_cluster = StrictRedisCluster(startup_nodes=startup_nodes)
print("area_code_cluster")
print(area_code_cluster)
print("==============")
def random_phonenumber(area_code):
	number = str(area_code)
	for i in range(7):
		number += "{}".format(random.randint(0,9))
	return number

def area_code_dict(filepath):
	with open(filepath) as fo:
		lines = fo.readlines()
	area_codes = dict()
	print area_codes
	for row in lines:
		fields = row.split("\t")
		area_codes[int(fields[0])] = fields[1].strip()
	print area_codes
	return area_codes


# def populate_cluster(total):
#         codes = list(area_codes.keys())
#         for i in range(total):
#             number = random.randint(0, len(codes)-1)
#             area_code = codes[number]
#             phone_number = random_phonenumber(area_code)
#         area_code_cluster.hsetnx(phone_number, "geographicArea", area_codes[area_code])


# Note: decode_responses must be set to True when used with python3


# r'/home/sanjaysingh/Desktop/toTest/redis-cluster/area_codes.txt'

area_codes = area_code_dict(r'/home/sanjaysingh/Desktop/toTest/redis-cluster/area-codes.txt')


def populate_cluster(total):
        codes = list(area_codes.keys())
        for i in range(total):
            number = random.randint(0, len(codes)-1)
            area_code = codes[number]
            phone_number = random_phonenumber(area_code)
            print(phone_number)
            area_code_cluster.hset(phone_number, "geographicArea", area_codes[area_code])





populate_cluster(134560)
