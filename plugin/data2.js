var data2 = {"name":"root","children":[{"name":"test.sharded_collection","shards":[{"_id":"shard0","host":"localhost:4000","chunks":[{"_id":"test.sharded_collection-_id_MinKey","lastmod":{"t":136000,"i":0},"ns":"test.sharded_collection","min":{"_id":{"$minKey":1}},"max":{"_id":0},"shard":"shard0"},{"_id":"test.sharded_collection-_id_0.0","lastmod":{"t":138000,"i":0},"ns":"test.sharded_collection","min":{"_id":0},"max":{"_id":3},"shard":"shard0"},{"_id":"test.sharded_collection-_id_6.0","lastmod":{"t":134000,"i":1},"ns":"test.sharded_collection","min":{"_id":6},"max":{"_id":9},"shard":"shard0"},{"_id":"test.sharded_collection-_id_9.0","lastmod":{"t":5000,"i":0},"ns":"test.sharded_collection","min":{"_id":9},"max":{"_id":12},"shard":"shard0"},{"_id":"test.sharded_collection-_id_12.0","lastmod":{"t":6000,"i":0},"ns":"test.sharded_collection","min":{"_id":12},"max":{"_id":15},"shard":"shard0"},{"_id":"test.sharded_collection-_id_15.0","lastmod":{"t":7000,"i":0},"ns":"test.sharded_collection","min":{"_id":15},"max":{"_id":18},"shard":"shard0"},{"_id":"test.sharded_collection-_id_18.0","lastmod":{"t":8000,"i":0},"ns":"test.sharded_collection","min":{"_id":18},"max":{"_id":21},"shard":"shard0"},{"_id":"test.sharded_collection-_id_21.0","lastmod":{"t":9000,"i":0},"ns":"test.sharded_collection","min":{"_id":21},"max":{"_id":24},"shard":"shard0"}]},{"_id":"shard1","host":"localhost:4001","chunks":[{"_id":"test.sharded_collection-_id_30.0","lastmod":{"t":137000,"i":0},"ns":"test.sharded_collection","min":{"_id":30},"max":{"_id":33},"shard":"shard1"},{"_id":"test.sharded_collection-_id_33.0","lastmod":{"t":135000,"i":1},"ns":"test.sharded_collection","min":{"_id":33},"max":{"_id":36},"shard":"shard1"},{"_id":"test.sharded_collection-_id_36.0","lastmod":{"t":2000,"i":24},"ns":"test.sharded_collection","min":{"_id":36},"max":{"_id":39},"shard":"shard1"},{"_id":"test.sharded_collection-_id_39.0","lastmod":{"t":2000,"i":26},"ns":"test.sharded_collection","min":{"_id":39},"max":{"_id":42},"shard":"shard1"},{"_id":"test.sharded_collection-_id_42.0","lastmod":{"t":2000,"i":28},"ns":"test.sharded_collection","min":{"_id":42},"max":{"_id":45},"shard":"shard1"},{"_id":"test.sharded_collection-_id_45.0","lastmod":{"t":2000,"i":30},"ns":"test.sharded_collection","min":{"_id":45},"max":{"_id":48},"shard":"shard1"},{"_id":"test.sharded_collection-_id_48.0","lastmod":{"t":2000,"i":31},"ns":"test.sharded_collection","min":{"_id":48},"max":{"_id":{"$maxKey":1}},"shard":"shard1"}]},{"_id":"shard3","draining":true,"host":"localhost:4002","chunks":[{"_id":"test.sharded_collection-_id_3.0","lastmod":{"t":138000,"i":1},"ns":"test.sharded_collection","min":{"_id":3},"max":{"_id":6},"shard":"shard3"},{"_id":"test.sharded_collection-_id_24.0","lastmod":{"t":131000,"i":0},"ns":"test.sharded_collection","min":{"_id":24},"max":{"_id":27},"shard":"shard3"},{"_id":"test.sharded_collection-_id_27.0","lastmod":{"t":133000,"i":0},"ns":"test.sharded_collection","min":{"_id":27},"max":{"_id":30},"shard":"shard3"}]}],"size":18},{"name":"test.sharded_collection.two","shards":[{"_id":"shard0","host":"localhost:4000","chunks":[{"_id":"test.sharded_collection.two-_id_MinKey","lastmod":{"t":137000,"i":0},"ns":"test.sharded_collection.two","min":{"_id":{"$minKey":1}},"max":{"_id":0},"shard":"shard0"},{"_id":"test.sharded_collection.two-_id_0.0","lastmod":{"t":138000,"i":0},"ns":"test.sharded_collection.two","min":{"_id":0},"max":{"_id":3},"shard":"shard0"},{"_id":"test.sharded_collection.two-_id_9.0","lastmod":{"t":136000,"i":1},"ns":"test.sharded_collection.two","min":{"_id":9},"max":{"_id":12},"shard":"shard0"},{"_id":"test.sharded_collection.two-_id_12.0","lastmod":{"t":1000,"i":11},"ns":"test.sharded_collection.two","min":{"_id":12},"max":{"_id":15},"shard":"shard0"},{"_id":"test.sharded_collection.two-_id_15.0","lastmod":{"t":1000,"i":13},"ns":"test.sharded_collection.two","min":{"_id":15},"max":{"_id":18},"shard":"shard0"},{"_id":"test.sharded_collection.two-_id_18.0","lastmod":{"t":1000,"i":15},"ns":"test.sharded_collection.two","min":{"_id":18},"max":{"_id":21},"shard":"shard0"},{"_id":"test.sharded_collection.two-_id_21.0","lastmod":{"t":1000,"i":17},"ns":"test.sharded_collection.two","min":{"_id":21},"max":{"_id":24},"shard":"shard0"},{"_id":"test.sharded_collection.two-_id_24.0","lastmod":{"t":1000,"i":19},"ns":"test.sharded_collection.two","min":{"_id":24},"max":{"_id":27},"shard":"shard0"}]},{"_id":"shard1","host":"localhost:4001","chunks":[{"_id":"test.sharded_collection.two-_id_33.0","lastmod":{"t":135000,"i":1},"ns":"test.sharded_collection.two","min":{"_id":33},"max":{"_id":36},"shard":"shard1"},{"_id":"test.sharded_collection.two-_id_36.0","lastmod":{"t":7000,"i":0},"ns":"test.sharded_collection.two","min":{"_id":36},"max":{"_id":39},"shard":"shard1"},{"_id":"test.sharded_collection.two-_id_39.0","lastmod":{"t":6000,"i":0},"ns":"test.sharded_collection.two","min":{"_id":39},"max":{"_id":42},"shard":"shard1"},{"_id":"test.sharded_collection.two-_id_42.0","lastmod":{"t":5000,"i":0},"ns":"test.sharded_collection.two","min":{"_id":42},"max":{"_id":45},"shard":"shard1"},{"_id":"test.sharded_collection.two-_id_45.0","lastmod":{"t":4000,"i":0},"ns":"test.sharded_collection.two","min":{"_id":45},"max":{"_id":48},"shard":"shard1"},{"_id":"test.sharded_collection.two-_id_48.0","lastmod":{"t":3000,"i":0},"ns":"test.sharded_collection.two","min":{"_id":48},"max":{"_id":49},"shard":"shard1"},{"_id":"test.sharded_collection.two-_id_49.0","lastmod":{"t":2000,"i":0},"ns":"test.sharded_collection.two","min":{"_id":49},"max":{"_id":{"$maxKey":1}},"shard":"shard1"}]},{"_id":"shard3","draining":true,"host":"localhost:4002","chunks":[{"_id":"test.sharded_collection.two-_id_3.0","lastmod":{"t":138000,"i":1},"ns":"test.sharded_collection.two","min":{"_id":3},"max":{"_id":6},"shard":"shard3"},{"_id":"test.sharded_collection.two-_id_6.0","lastmod":{"t":136000,"i":0},"ns":"test.sharded_collection.two","min":{"_id":6},"max":{"_id":9},"shard":"shard3"},{"_id":"test.sharded_collection.two-_id_27.0","lastmod":{"t":133000,"i":0},"ns":"test.sharded_collection.two","min":{"_id":27},"max":{"_id":30},"shard":"shard3"},{"_id":"test.sharded_collection.two-_id_30.0","lastmod":{"t":135000,"i":0},"ns":"test.sharded_collection.two","min":{"_id":30},"max":{"_id":33},"shard":"shard3"}]}],"size":19}]};
