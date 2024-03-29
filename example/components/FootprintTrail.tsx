import React, {Component} from "react";
import {Platform, StyleSheet} from "react-native";
import {AMapSdk, MapView, Polyline} from "react-native-amap3d";

const trailPoints = [
    {
        "lng":116.405915,
        "lat":39.911887
    },
    {
        "lng":116.405823,
        "lat":39.913907
    },
    {
        "lng":116.405813,
        "lat":39.914117
    },
    {
        "lng":116.405813,
        "lat":39.914117
    },
    {
        "lng":116.405743,
        "lat":39.914117
    },
    {
        "lng":116.403984,
        "lat":39.914034
    },
    {
        "lng":116.402106,
        "lat":39.913978
    },
    {
        "lng":116.402036,
        "lat":39.913978
    },
    {
        "lng":116.401917,
        "lat":39.913978
    },
    {
        "lng":116.401228,
        "lat":39.913945
    },
    {
        "lng":116.401008,
        "lat":39.913934
    },
    {
        "lng":116.400599,
        "lat":39.913921
    },
    {
        "lng":116.399901,
        "lat":39.913897
    },
    {
        "lng":116.399472,
        "lat":39.913875
    },
    {
        "lng":116.399292,
        "lat":39.913874
    },
    {
        "lng":116.398694,
        "lat":39.91385
    },
    {
        "lng":116.398165,
        "lat":39.913816
    },
    {
        "lng":116.397667,
        "lat":39.913782
    },
    {
        "lng":116.396231,
        "lat":39.91373
    },
    {
        "lng":116.395743,
        "lat":39.913705
    },
    {
        "lng":116.395583,
        "lat":39.913694
    },
    {
        "lng":116.395115,
        "lat":39.913679
    },
    {
        "lng":116.395025,
        "lat":39.913678
    },
    {
        "lng":116.392804,
        "lat":39.913593
    },
    {
        "lng":116.390584,
        "lat":39.913495
    },
    {
        "lng":116.38933,
        "lat":39.913458
    },
    {
        "lng":116.389241,
        "lat":39.913456
    },
    {
        "lng":116.388912,
        "lat":39.913462
    },
    {
        "lng":116.388733,
        "lat":39.913459
    },
    {
        "lng":116.388336,
        "lat":39.913453
    },
    {
        "lng":116.388266,
        "lat":39.913442
    },
    {
        "lng":116.388087,
        "lat":39.91345
    },
    {
        "lng":116.387241,
        "lat":39.913437
    },
    {
        "lng":116.386386,
        "lat":39.913423
    },
    {
        "lng":116.385899,
        "lat":39.913416
    },
    {
        "lng":116.385849,
        "lat":39.913415
    },
    {
        "lng":116.385382,
        "lat":39.913417
    },
    {
        "lng":116.384328,
        "lat":39.9134
    },
    {
        "lng":116.384169,
        "lat":39.913397
    },
    {
        "lng":116.383473,
        "lat":39.913385
    },
    {
        "lng":116.383106,
        "lat":39.913379
    },
    {
        "lng":116.38233,
        "lat":39.913366
    },
    {
        "lng":116.382327,
        "lat":39.913363
    },
    {
        "lng":116.382297,
        "lat":39.913363
    },
    {
        "lng":116.382267,
        "lat":39.913362
    },
    {
        "lng":116.381651,
        "lat":39.913362
    },
    {
        "lng":116.381492,
        "lat":39.913359
    },
    {
        "lng":116.381462,
        "lat":39.913358
    },
    {
        "lng":116.381254,
        "lat":39.913355
    },
    {
        "lng":116.381184,
        "lat":39.913353
    },
    {
        "lng":116.381055,
        "lat":39.913351
    },
    {
        "lng":116.380876,
        "lat":39.913348
    },
    {
        "lng":116.380807,
        "lat":39.913347
    },
    {
        "lng":116.380747,
        "lat":39.913336
    },
    {
        "lng":116.380668,
        "lat":39.913335
    },
    {
        "lng":116.380439,
        "lat":39.91332
    },
    {
        "lng":116.380438,
        "lat":39.91332
    },
    {
        "lng":116.380339,
        "lat":39.913318
    },
    {
        "lng":116.38014,
        "lat":39.913314
    },
    {
        "lng":116.380051,
        "lat":39.913323
    },
    {
        "lng":116.379494,
        "lat":39.913313
    },
    {
        "lng":116.378859,
        "lat":39.913301
    },
    {
        "lng":116.378858,
        "lat":39.913301
    },
    {
        "lng":116.378103,
        "lat":39.913287
    },
    {
        "lng":116.377795,
        "lat":39.913292
    },
    {
        "lng":116.377348,
        "lat":39.913274
    },
    {
        "lng":116.376513,
        "lat":39.913258
    },
    {
        "lng":116.375579,
        "lat":39.913251
    },
    {
        "lng":116.374238,
        "lat":39.913227
    },
    {
        "lng":116.373811,
        "lat":39.913219
    },
    {
        "lng":116.373751,
        "lat":39.913218
    },
    {
        "lng":116.373105,
        "lat":39.913206
    },
    {
        "lng":116.372211,
        "lat":39.91319
    },
    {
        "lng":116.37221,
        "lat":39.91319
    },
    {
        "lng":116.371176,
        "lat":39.913181
    },
    {
        "lng":116.370222,
        "lat":39.913164
    },
    {
        "lng":116.369854,
        "lat":39.913148
    },
    {
        "lng":116.369705,
        "lat":39.913156
    },
    {
        "lng":116.369606,
        "lat":39.913154
    },
    {
        "lng":116.369328,
        "lat":39.913149
    },
    {
        "lng":116.368731,
        "lat":39.913139
    },
    {
        "lng":116.368453,
        "lat":39.913135
    },
    {
        "lng":116.366474,
        "lat":39.913102
    },
    {
        "lng":116.366275,
        "lat":39.913109
    },
    {
        "lng":116.365897,
        "lat":39.913103
    },
    {
        "lng":116.36547,
        "lat":39.913097
    },
    {
        "lng":116.365331,
        "lat":39.913095
    },
    {
        "lng":116.364604,
        "lat":39.913084
    },
    {
        "lng":116.364127,
        "lat":39.913077
    },
    {
        "lng":116.364126,
        "lat":39.913076
    },
    {
        "lng":116.363936,
        "lat":39.913183
    },
    {
        "lng":116.363807,
        "lat":39.913311
    },
    {
        "lng":116.363767,
        "lat":39.913531
    },
    {
        "lng":116.363707,
        "lat":39.91452
    },
    {
        "lng":116.363607,
        "lat":39.914758
    },
    {
        "lng":116.363577,
        "lat":39.915028
    },
    {
        "lng":116.363397,
        "lat":39.915685
    },
    {
        "lng":116.363338,
        "lat":39.915954
    },
    {
        "lng":116.363337,
        "lat":39.915954
    },
    {
        "lng":116.363227,
        "lat":39.916182
    },
    {
        "lng":116.363227,
        "lat":39.916182
    },
    {
        "lng":116.363306,
        "lat":39.916603
    },
    {
        "lng":116.363336,
        "lat":39.916814
    },
    {
        "lng":116.363385,
        "lat":39.917234
    },
    {
        "lng":116.363455,
        "lat":39.917915
    },
    {
        "lng":116.363374,
        "lat":39.919493
    },
    {
        "lng":116.363364,
        "lat":39.919673
    },
    {
        "lng":116.363354,
        "lat":39.919763
    },
    {
        "lng":116.363334,
        "lat":39.920393
    },
    {
        "lng":116.363293,
        "lat":39.921782
    },
    {
        "lng":116.363283,
        "lat":39.921982
    },
    {
        "lng":116.363273,
        "lat":39.922131
    },
    {
        "lng":116.363263,
        "lat":39.922441
    },
    {
        "lng":116.363192,
        "lat":39.92405
    },
    {
        "lng":116.363182,
        "lat":39.92422
    },
    {
        "lng":116.363182,
        "lat":39.9243
    },
    {
        "lng":116.363172,
        "lat":39.92453
    },
    {
        "lng":116.363122,
        "lat":39.925599
    },
    {
        "lng":116.363112,
        "lat":39.925819
    },
    {
        "lng":116.363032,
        "lat":39.926937
    },
    {
        "lng":116.363022,
        "lat":39.927287
    },
    {
        "lng":116.363002,
        "lat":39.927947
    },
    {
        "lng":116.362852,
        "lat":39.931164
    },
    {
        "lng":116.362832,
        "lat":39.931554
    },
    {
        "lng":116.362822,
        "lat":39.931664
    },
    {
        "lng":116.362802,
        "lat":39.931984
    },
    {
        "lng":116.362802,
        "lat":39.932263
    },
    {
        "lng":116.362762,
        "lat":39.933313
    },
    {
        "lng":116.362663,
        "lat":39.935171
    },
    {
        "lng":116.362661,
        "lat":39.935171
    },
    {
        "lng":116.362541,
        "lat":39.93767
    },
    {
        "lng":116.362512,
        "lat":39.938209
    },
    {
        "lng":116.362492,
        "lat":39.938679
    },
    {
        "lng":116.362433,
        "lat":39.940839
    },
    {
        "lng":116.362364,
        "lat":39.942108
    },
    {
        "lng":116.362354,
        "lat":39.942168
    },
    {
        "lng":116.362324,
        "lat":39.942597
    },
    {
        "lng":116.362295,
        "lat":39.943357
    },
    {
        "lng":116.362294,
        "lat":39.943357
    },
    {
        "lng":116.362235,
        "lat":39.944376
    },
    {
        "lng":116.362225,
        "lat":39.945356
    },
    {
        "lng":116.362216,
        "lat":39.946226
    },
    {
        "lng":116.362216,
        "lat":39.946226
    },
    {
        "lng":116.362206,
        "lat":39.946316
    },
    {
        "lng":116.362206,
        "lat":39.946366
    },
    {
        "lng":116.362117,
        "lat":39.947765
    },
    {
        "lng":116.362117,
        "lat":39.947765
    },
    {
        "lng":116.362197,
        "lat":39.948196
    },
    {
        "lng":116.362326,
        "lat":39.948378
    },
    {
        "lng":116.362884,
        "lat":39.949176
    },
    {
        "lng":116.362924,
        "lat":39.949226
    },
    {
        "lng":116.362944,
        "lat":39.949237
    },
    {
        "lng":116.363054,
        "lat":39.949348
    },
    {
        "lng":116.363123,
        "lat":39.949409
    },
    {
        "lng":116.363263,
        "lat":39.949501
    },
    {
        "lng":116.363412,
        "lat":39.949593
    },
    {
        "lng":116.363711,
        "lat":39.949738
    },
    {
        "lng":116.364059,
        "lat":39.949863
    },
    {
        "lng":116.365074,
        "lat":39.950148
    },
    {
        "lng":116.365571,
        "lat":39.950316
    },
    {
        "lng":116.366228,
        "lat":39.950536
    },
    {
        "lng":116.366258,
        "lat":39.950546
    },
    {
        "lng":116.366964,
        "lat":39.950768
    },
    {
        "lng":116.367292,
        "lat":39.950863
    },
    {
        "lng":116.368287,
        "lat":39.951169
    },
    {
        "lng":116.368287,
        "lat":39.951169
    },
    {
        "lng":116.368735,
        "lat":39.951307
    },
    {
        "lng":116.371399,
        "lat":39.952093
    },
    {
        "lng":116.371926,
        "lat":39.952273
    },
    {
        "lng":116.372413,
        "lat":39.952481
    },
    {
        "lng":116.373418,
        "lat":39.95293
    },
    {
        "lng":116.37475,
        "lat":39.953534
    },
    {
        "lng":116.375088,
        "lat":39.95368
    },
    {
        "lng":116.375575,
        "lat":39.953889
    },
    {
        "lng":116.375575,
        "lat":39.953889
    },
    {
        "lng":116.375684,
        "lat":39.953911
    },
    {
        "lng":116.375962,
        "lat":39.953977
    },
    {
        "lng":116.376399,
        "lat":39.954095
    },
    {
        "lng":116.377016,
        "lat":39.954256
    },
    {
        "lng":116.377234,
        "lat":39.95432
    },
    {
        "lng":116.377533,
        "lat":39.954385
    },
    {
        "lng":116.3779,
        "lat":39.954442
    },
    {
        "lng":116.378099,
        "lat":39.954476
    },
    {
        "lng":116.381458,
        "lat":39.954727
    },
    {
        "lng":116.38292,
        "lat":39.954802
    },
    {
        "lng":116.383437,
        "lat":39.954901
    },
    {
        "lng":116.383685,
        "lat":39.955006
    },
    {
        "lng":116.383994,
        "lat":39.955191
    },
    {
        "lng":116.384322,
        "lat":39.955517
    },
    {
        "lng":116.384471,
        "lat":39.955739
    },
    {
        "lng":116.384611,
        "lat":39.955931
    },
    {
        "lng":116.384889,
        "lat":39.956326
    },
    {
        "lng":116.385238,
        "lat":39.956822
    },
    {
        "lng":116.385636,
        "lat":39.957469
    },
    {
        "lng":116.385766,
        "lat":39.957791
    },
    {
        "lng":116.385806,
        "lat":39.957912
    },
    {
        "lng":116.385855,
        "lat":39.958153
    },
    {
        "lng":116.385895,
        "lat":39.958353
    },
    {
        "lng":116.385916,
        "lat":39.958954
    },
    {
        "lng":116.385897,
        "lat":39.959614
    },
    {
        "lng":116.385887,
        "lat":39.960194
    },
    {
        "lng":116.385887,
        "lat":39.960194
    },
    {
        "lng":116.385869,
        "lat":39.961434
    },
    {
        "lng":116.385859,
        "lat":39.961834
    },
    {
        "lng":116.38586,
        "lat":39.962114
    },
    {
        "lng":116.38586,
        "lat":39.962154
    },
    {
        "lng":116.38586,
        "lat":39.962224
    },
    {
        "lng":116.38586,
        "lat":39.962314
    },
    {
        "lng":116.38585,
        "lat":39.962544
    },
    {
        "lng":116.385831,
        "lat":39.963754
    },
    {
        "lng":116.385822,
        "lat":39.964164
    },
    {
        "lng":116.385852,
        "lat":39.964745
    },
    {
        "lng":116.386003,
        "lat":39.966548
    },
    {
        "lng":116.386013,
        "lat":39.966658
    },
    {
        "lng":116.386124,
        "lat":39.96759
    },
    {
        "lng":116.386124,
        "lat":39.96763
    },
    {
        "lng":116.386154,
        "lat":39.967811
    },
    {
        "lng":116.386244,
        "lat":39.968582
    },
    {
        "lng":116.386595,
        "lat":39.971489
    },
    {
        "lng":116.386594,
        "lat":39.971489
    },
    {
        "lng":116.386644,
        "lat":39.97186
    },
    {
        "lng":116.386675,
        "lat":39.97219
    },
    {
        "lng":116.386725,
        "lat":39.972621
    },
    {
        "lng":116.386735,
        "lat":39.972711
    },
    {
        "lng":116.386785,
        "lat":39.973072
    },
    {
        "lng":116.386795,
        "lat":39.973223
    },
    {
        "lng":116.386825,
        "lat":39.973423
    },
    {
        "lng":116.386825,
        "lat":39.973463
    },
    {
        "lng":116.386835,
        "lat":39.973593
    },
    {
        "lng":116.386865,
        "lat":39.973784
    },
    {
        "lng":116.386875,
        "lat":39.973884
    },
    {
        "lng":116.386915,
        "lat":39.974175
    },
    {
        "lng":116.387025,
        "lat":39.975057
    },
    {
        "lng":116.387035,
        "lat":39.975147
    },
    {
        "lng":116.387106,
        "lat":39.975848
    },
    {
        "lng":116.387106,
        "lat":39.975848
    },
    {
        "lng":116.387356,
        "lat":39.978043
    },
    {
        "lng":116.387466,
        "lat":39.978935
    },
    {
        "lng":116.387616,
        "lat":39.979977
    },
    {
        "lng":116.387687,
        "lat":39.980648
    },
    {
        "lng":116.387706,
        "lat":39.980749
    },
    {
        "lng":116.387777,
        "lat":39.98137
    },
    {
        "lng":116.387807,
        "lat":39.98157
    },
    {
        "lng":116.387847,
        "lat":39.981991
    },
    {
        "lng":116.387867,
        "lat":39.982232
    },
    {
        "lng":116.387887,
        "lat":39.982482
    },
    {
        "lng":116.387887,
        "lat":39.983052
    },
    {
        "lng":116.387887,
        "lat":39.983062
    },
    {
        "lng":116.387818,
        "lat":39.983761
    },
    {
        "lng":116.387788,
        "lat":39.983921
    },
    {
        "lng":116.387759,
        "lat":39.98406
    },
    {
        "lng":116.387669,
        "lat":39.984489
    },
    {
        "lng":116.387451,
        "lat":39.985286
    },
    {
        "lng":116.386905,
        "lat":39.987248
    },
    {
        "lng":116.386904,
        "lat":39.987248
    },
    {
        "lng":116.386815,
        "lat":39.987556
    },
    {
        "lng":116.386646,
        "lat":39.988174
    },
    {
        "lng":116.386418,
        "lat":39.98897
    },
    {
        "lng":116.38614,
        "lat":39.989916
    },
    {
        "lng":116.38614,
        "lat":39.989916
    },
    {
        "lng":116.385564,
        "lat":39.991867
    },
    {
        "lng":116.385563,
        "lat":39.991867
    },
    {
        "lng":116.38447,
        "lat":39.995619
    },
    {
        "lng":116.384421,
        "lat":39.995788
    },
    {
        "lng":116.384073,
        "lat":39.996972
    },
    {
        "lng":116.383844,
        "lat":39.997718
    },
    {
        "lng":116.383596,
        "lat":39.998324
    },
    {
        "lng":116.383437,
        "lat":39.998631
    },
    {
        "lng":116.383436,
        "lat":39.998631
    },
    {
        "lng":116.382849,
        "lat":39.999531
    },
    {
        "lng":116.381487,
        "lat":40.001287
    },
    {
        "lng":116.380404,
        "lat":40.002677
    },
    {
        "lng":116.379429,
        "lat":40.003949
    },
    {
        "lng":116.379062,
        "lat":40.004423
    },
    {
        "lng":116.379061,
        "lat":40.004423
    },
    {
        "lng":116.378793,
        "lat":40.004748
    },
    {
        "lng":116.378634,
        "lat":40.004955
    },
    {
        "lng":116.377798,
        "lat":40.006029
    },
    {
        "lng":116.377152,
        "lat":40.006857
    },
    {
        "lng":116.376924,
        "lat":40.007163
    },
    {
        "lng":116.376665,
        "lat":40.007508
    },
    {
        "lng":116.376606,
        "lat":40.007587
    },
    {
        "lng":116.376556,
        "lat":40.007646
    },
    {
        "lng":116.376288,
        "lat":40.008011
    },
    {
        "lng":116.375562,
        "lat":40.008978
    },
    {
        "lng":116.374418,
        "lat":40.010516
    },
    {
        "lng":116.373781,
        "lat":40.011364
    },
    {
        "lng":116.37378,
        "lat":40.011364
    },
    {
        "lng":116.37199,
        "lat":40.013772
    },
    {
        "lng":116.371323,
        "lat":40.014669
    },
    {
        "lng":116.370557,
        "lat":40.015706
    },
    {
        "lng":116.369811,
        "lat":40.016682
    },
    {
        "lng":116.369632,
        "lat":40.016929
    },
    {
        "lng":116.368835,
        "lat":40.018315
    },
    {
        "lng":116.368686,
        "lat":40.018553
    },
    {
        "lng":116.368487,
        "lat":40.018789
    },
    {
        "lng":116.368119,
        "lat":40.019133
    },
    {
        "lng":116.36776,
        "lat":40.019447
    },
    {
        "lng":116.367283,
        "lat":40.019979
    },
    {
        "lng":116.366596,
        "lat":40.020878
    },
    {
        "lng":116.365032,
        "lat":40.022893
    },
    {
        "lng":116.363269,
        "lat":40.025146
    },
    {
        "lng":116.362332,
        "lat":40.026343
    },
    {
        "lng":116.362331,
        "lat":40.026343
    },
    {
        "lng":116.361474,
        "lat":40.027441
    },
    {
        "lng":116.361304,
        "lat":40.027659
    },
    {
        "lng":116.361304,
        "lat":40.027659
    },
    {
        "lng":116.361145,
        "lat":40.028087
    },
    {
        "lng":116.360576,
        "lat":40.029129
    },
    {
        "lng":116.360516,
        "lat":40.029339
    },
    {
        "lng":116.360516,
        "lat":40.029389
    },
    {
        "lng":116.360526,
        "lat":40.029489
    },
    {
        "lng":116.360596,
        "lat":40.029629
    },
    {
        "lng":116.360775,
        "lat":40.029782
    },
    {
        "lng":116.360854,
        "lat":40.029813
    },
    {
        "lng":116.361014,
        "lat":40.029845
    },
    {
        "lng":116.361233,
        "lat":40.029827
    },
    {
        "lng":116.361342,
        "lat":40.029789
    },
    {
        "lng":116.361392,
        "lat":40.02976
    },
    {
        "lng":116.361482,
        "lat":40.029691
    },
    {
        "lng":116.361572,
        "lat":40.029572
    },
    {
        "lng":116.361602,
        "lat":40.029403
    },
    {
        "lng":116.361562,
        "lat":40.029272
    },
    {
        "lng":116.361353,
        "lat":40.02906
    },
    {
        "lng":116.361303,
        "lat":40.029039
    },
    {
        "lng":116.361264,
        "lat":40.029029
    },
    {
        "lng":116.361184,
        "lat":40.029008
    },
    {
        "lng":116.361145,
        "lat":40.028997
    },
    {
        "lng":116.361105,
        "lat":40.028977
    },
    {
        "lng":116.360577,
        "lat":40.02888
    },
    {
        "lng":116.360576,
        "lat":40.028879
    },
    {
        "lng":116.360208,
        "lat":40.028875
    },
    {
        "lng":116.360158,
        "lat":40.028875
    },
    {
        "lng":116.359222,
        "lat":40.028884
    },
    {
        "lng":116.358833,
        "lat":40.028879
    },
    {
        "lng":116.357399,
        "lat":40.028875
    },
    {
        "lng":116.356023,
        "lat":40.028882
    },
    {
        "lng":116.355634,
        "lat":40.028879
    },
    {
        "lng":116.355016,
        "lat":40.028883
    },
    {
        "lng":116.354617,
        "lat":40.028881
    },
    {
        "lng":116.35347,
        "lat":40.028893
    },
    {
        "lng":116.351594,
        "lat":40.028892
    },
    {
        "lng":116.348727,
        "lat":40.028922
    },
    {
        "lng":116.347348,
        "lat":40.028931
    },
    {
        "lng":116.344507,
        "lat":40.028952
    },
    {
        "lng":116.342996,
        "lat":40.028867
    },
    {
        "lng":116.341945,
        "lat":40.028721
    },
    {
        "lng":116.340924,
        "lat":40.028506
    },
    {
        "lng":116.340152,
        "lat":40.028301
    },
    {
        "lng":116.337296,
        "lat":40.027422
    },
    {
        "lng":116.337294,
        "lat":40.027421
    },
    {
        "lng":116.336632,
        "lat":40.027357
    },
    {
        "lng":116.336271,
        "lat":40.027311
    },
    {
        "lng":116.33591,
        "lat":40.027304
    },
    {
        "lng":116.335298,
        "lat":40.02738
    },
    {
        "lng":116.334726,
        "lat":40.027556
    },
    {
        "lng":116.333943,
        "lat":40.027904
    },
    {
        "lng":116.333632,
        "lat":40.028078
    },
    {
        "lng":116.333059,
        "lat":40.028464
    },
    {
        "lng":116.332728,
        "lat":40.028738
    },
    {
        "lng":116.332165,
        "lat":40.029325
    },
    {
        "lng":116.331783,
        "lat":40.02967
    },
    {
        "lng":116.331782,
        "lat":40.029669
    },
    {
        "lng":116.330997,
        "lat":40.030979
    },
    {
        "lng":116.330736,
        "lat":40.031462
    },
    {
        "lng":116.330383,
        "lat":40.032217
    },
    {
        "lng":116.330011,
        "lat":40.033152
    },
    {
        "lng":116.330011,
        "lat":40.033152
    },
    {
        "lng":116.329829,
        "lat":40.033674
    },
    {
        "lng":116.329668,
        "lat":40.034206
    },
    {
        "lng":116.329578,
        "lat":40.034547
    },
    {
        "lng":116.329406,
        "lat":40.03516
    },
    {
        "lng":116.329195,
        "lat":40.035912
    },
    {
        "lng":116.329124,
        "lat":40.036183
    },
    {
        "lng":116.329044,
        "lat":40.036435
    },
    {
        "lng":116.328893,
        "lat":40.036877
    },
    {
        "lng":116.328581,
        "lat":40.037671
    },
    {
        "lng":116.328299,
        "lat":40.038225
    },
    {
        "lng":116.328017,
        "lat":40.038699
    },
    {
        "lng":116.327765,
        "lat":40.039073
    },
    {
        "lng":116.327272,
        "lat":40.03969
    },
    {
        "lng":116.326669,
        "lat":40.040309
    },
    {
        "lng":116.326236,
        "lat":40.040726
    },
    {
        "lng":116.324395,
        "lat":40.042336
    },
    {
        "lng":116.322735,
        "lat":40.043793
    },
    {
        "lng":116.322272,
        "lat":40.044231
    },
    {
        "lng":116.321728,
        "lat":40.044831
    },
    {
        "lng":116.321225,
        "lat":40.045479
    },
    {
        "lng":116.320853,
        "lat":40.046056
    },
    {
        "lng":116.319876,
        "lat":40.047753
    },
    {
        "lng":116.319433,
        "lat":40.048521
    },
    {
        "lng":116.319071,
        "lat":40.049117
    },
    {
        "lng":116.318779,
        "lat":40.049552
    },
    {
        "lng":116.318668,
        "lat":40.049734
    },
    {
        "lng":116.318366,
        "lat":40.05016
    },
    {
        "lng":116.317722,
        "lat":40.051041
    },
    {
        "lng":116.317118,
        "lat":40.051792
    },
    {
        "lng":116.316766,
        "lat":40.052259
    },
    {
        "lng":116.316072,
        "lat":40.053131
    },
    {
        "lng":116.314552,
        "lat":40.055069
    },
    {
        "lng":116.313465,
        "lat":40.056568
    },
    {
        "lng":116.313425,
        "lat":40.056629
    },
    {
        "lng":116.313214,
        "lat":40.056933
    },
    {
        "lng":116.313043,
        "lat":40.057176
    },
    {
        "lng":116.312279,
        "lat":40.05835
    },
    {
        "lng":116.312188,
        "lat":40.058491
    },
    {
        "lng":116.311152,
        "lat":40.060239
    },
    {
        "lng":116.311149,
        "lat":40.060239
    },
    {
        "lng":116.311108,
        "lat":40.06043
    },
    {
        "lng":116.311088,
        "lat":40.06051
    },
    {
        "lng":116.311038,
        "lat":40.060661
    },
    {
        "lng":116.310948,
        "lat":40.060843
    },
    {
        "lng":116.310878,
        "lat":40.061004
    },
    {
        "lng":116.310576,
        "lat":40.061579
    },
    {
        "lng":116.310506,
        "lat":40.061701
    },
    {
        "lng":116.310405,
        "lat":40.061892
    },
    {
        "lng":116.310053,
        "lat":40.062578
    },
    {
        "lng":116.309601,
        "lat":40.063456
    },
    {
        "lng":116.30933,
        "lat":40.063991
    },
    {
        "lng":116.309028,
        "lat":40.064376
    },
    {
        "lng":116.308616,
        "lat":40.064593
    },
    {
        "lng":116.308264,
        "lat":40.064679
    },
    {
        "lng":116.307772,
        "lat":40.064677
    },
    {
        "lng":116.306877,
        "lat":40.064522
    },
    {
        "lng":116.304815,
        "lat":40.064153
    },
    {
        "lng":116.303499,
        "lat":40.063863
    },
    {
        "lng":116.302866,
        "lat":40.063772
    },
    {
        "lng":116.302806,
        "lat":40.063732
    },
    {
        "lng":116.302804,
        "lat":40.063732
    },
    {
        "lng":116.303376,
        "lat":40.062104
    },
    {
        "lng":116.303908,
        "lat":40.060446
    },
    {
        "lng":116.303928,
        "lat":40.060356
    },
    {
        "lng":116.303989,
        "lat":40.060125
    },
    {
        "lng":116.304139,
        "lat":40.059583
    },
    {
        "lng":116.30426,
        "lat":40.059161
    },
    {
        "lng":116.30433,
        "lat":40.05892
    },
    {
        "lng":116.304441,
        "lat":40.058549
    },
    {
        "lng":116.304451,
        "lat":40.058499
    },
    {
        "lng":116.304602,
        "lat":40.057987
    },
    {
        "lng":116.304702,
        "lat":40.057635
    },
    {
        "lng":116.305094,
        "lat":40.056339
    },
    {
        "lng":116.305124,
        "lat":40.056249
    },
    {
        "lng":116.305144,
        "lat":40.056189
    },
    {
        "lng":116.305476,
        "lat":40.055264
    },
    {
        "lng":116.305496,
        "lat":40.055213
    },
    {
        "lng":116.305647,
        "lat":40.055241
    },
    {
        "lng":116.305647,
        "lat":40.05524
    },
    {
        "lng":116.305627,
        "lat":40.0553
    },
    {
        "lng":116.305245,
        "lat":40.056356
    },
    {
        "lng":116.304853,
        "lat":40.057642
    },
    {
        "lng":116.304753,
        "lat":40.057994
    },
    {
        "lng":116.304752,
        "lat":40.057994
    },
    {
        "lng":116.306451,
        "lat":40.058308
    },
    {
        "lng":116.306451,
        "lat":40.058308
    },
    {
        "lng":116.306693,
        "lat":40.057714
    },
    {
        "lng":116.306843,
        "lat":40.057331
    },
    {
        "lng":116.306914,
        "lat":40.05715
    },
    {
        "lng":116.306914,
        "lat":40.05715
    },
    {
        "lng":116.307034,
        "lat":40.057188
    },
    {
        "lng":116.307115,
        "lat":40.057207
    },
    {
        "lng":116.307115,
        "lat":40.057207
    },
    {
        "lng":116.306884,
        "lat":40.057761
    },
    {
        "lng":116.306884,
        "lat":40.057761
    },
    {
        "lng":116.306884,
        "lat":40.057811
    },
    {
        "lng":116.306944,
        "lat":40.05787
    },
    {
        "lng":116.307376,
        "lat":40.057993
    },
    {
        "lng":116.307708,
        "lat":40.058077
    },
    {
        "lng":116.307708,
        "lat":40.058077
    },
    {
        "lng":116.307728,
        "lat":40.058047
    },
    {
        "lng":116.30813,
        "lat":40.057191
    },
    {
        "lng":116.308281,
        "lat":40.056858
    },
    {
        "lng":116.308603,
        "lat":40.055993
    },
    {
        "lng":116.308603,
        "lat":40.055993
    },
    {
        "lng":116.308131,
        "lat":40.055891
    }
]

let map = null;
let allPoints = [];
const driveSpeed = 4500;

class FootprintTrail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPoints: [],
        };
        this.i = 0; // 移动到当前点的索引
        this.marker = null; // 当前地图上移动的marker
        this.timer = null;
    }

    componentDidMount() {
        // 初始化地图,设置城市和地图级别
        AMapSdk.init(
            Platform.select({
                android: "2b98dcea615041bc691ba73942fddc84",
                // ios: "186d3464209b74effa4d8391f441f14d",
            })
        );

        // 初始化地图,设置中心点坐标和地图级别


        // 绘制轨迹
        allPoints = trailPoints.map((point) => {
            return {latitude: point.lat, longitude: point.lng};
        });
        this.drawLineOnMap(allPoints);
        // TODO
        map.setViewport(allPoints);

    }

    /**
     * 绘制地图上的轨迹
     * @param points 轨迹点
     */
    drawLineOnMap = (points) => {
        this.setState({showPoints: points});
    };


    // 汽车开始运动
    handleStart = () => {
        // 不是第一次开始，并且小车没有达到终点
        if (this.i && this.i < allPoints.length - 1) {
            this.moveToNext(this.i += 1);
        } else {
            // 第一次点击 删除之前的Marker 添加新的Marker
            this.addAndClearMarker(allPoints[0]);
            this.timer = setTimeout(() => {
                this.moveToNext(this.i);
            }, 400);
        }
    };

    // 停止运行
    handleStop = () => {
        this.clearTimer();
    };


    /**
     * 添加当前位置的marker
     * 删除地图上之前添加的marker
     */
    addAndClearMarker = (point) => {
        this.marker = point;
    }


    /**
     * 移动到下一个点
     * @param currentIndex 当前index
     */
    moveToNext = (currentIndex) => {
        if (currentIndex < allPoints.length - 1) {
            this.move(allPoints[currentIndex], allPoints[currentIndex + 1]);
        } else {
            // 将marker移动到最后一个点上
            this.marker.setPosition(allPoints[currentIndex]);
            clearTimeout(this.timer);
        }
    };

    /**
     * 移动
     * @param currentPoint 当前点
     * @param nextPoint 移动到的下一个点
     */
    move = (currentPoint, nextPoint) => {
        let currentCount = 0;
        const timer = 10; // 10ms 执行一次
        const step = driveSpeed / (1000 / timer);
        const count = Math.round(this.getDistance(currentPoint, nextPoint) / step);
        // 初始坐标
        const initPos = currentCount;
        // 结束点的坐标
        const targetPost = nextPoint;
        // 如果小于1直接移动到下一点
        if (count < 1) {
            this.moveToNext(this.i += 1);
            return;
        }
        // 两点之间匀速移动
        this.intervalFlag = setInterval(() => {
            // 当currentCount > count 时 说明两点间的距离已经走完
            if (currentCount > count) {
                clearInterval(this.intervalFlag);
                if (this.i > allPoints.length) {
                    return;
                }
                // 运行下一个点
                this.moveToNext(this.i += 1);
            } else {
                currentCount += 1;
                // 计算相邻点的（x, y）
                const x = this.getOffset(initPos.x, targetPost.x, currentCount, count);
                const y = this.getOffset(initPos.y, targetPost.y, currentCount, count);
                const pos = map.getMapType().getProjection().pointToLngLat(new BMap.Pixel(x, y));
                this.marker.setPosition(pos);
            }
        }, timer);
    };

    /**
     * 计算两点之间的距离
     * @param startPoint 开始点
     * @param endPoint 结束点
     * 返回两点之间的距离，保留两位小数
     */
    getDistance = (startPoint, endPoint) => map.getDistance(startPoint, endPoint).toFixed(2);

    /**
     * 计算偏移量——地图下一个点（非后端返回）
     * @param initPos 初始点
     * @param targetPost 结束点
     * @param currentCount 当前的步长点
     * @param count 总步长
     */
    getOffset = (initPos, targetPost, currentCount, count) => {
        const b = initPos;
        const c = targetPost - initPos;
        const t = currentCount;
        const d = count;
        return (c * t / d + b);
    };

    /**
     * 清空页面上的计时器
     */
    clearTimer = () => {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        if (this.intervalFlag) {
            clearInterval(this.intervalFlag);
        }
    };

    render() {
        const line = this.state.showPoints;
        return (
            <MapView style={StyleSheet.absoluteFill}>
                <Polyline
                    width={5}
                    colors={["#f44336", "#2196f3", "#4caf50"]}
                    onPress={() => alert("onPress")}
                    points={line}
                    gradient
                />
            </MapView>
        );
    }
}

