#!/usr/bin/env python

import os
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns

cwd = os.getcwd()

file_name = 'second_set_of_trials_all_distances_per_iterations.csv'
path = os.path.join(cwd, '../data/', file_name)
df = pd.read_csv(path)

complete_mean = df.mean(axis=1)
complete_std = df.std(axis=1)
print(complete_std.mean())

cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
df_adjusted = df.drop(df.columns[cols],axis=1,inplace=False)
adjusted_std = df_adjusted.std(axis=1)
print(adjusted_std.mean())


