#!/usr/bin/env python

import os
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns

cwd = os.getcwd()

file_name = 'best_trial_distance_per_iteration.csv'
path = os.path.join(cwd, '../data/', file_name)
key = 'distance'

df = pd.read_csv(path)
df[key] = df[key] / df[key].max()

print(df[key].describe());
ax = sns.lineplot(x='iteration_index', y='distance', data=df)
ax.set_xlabel('Iterations');
ax.set_ylabel('Normalised distance between the best position and the food');

plt.show()


