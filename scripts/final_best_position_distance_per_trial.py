#!/usr/bin/env python

import os
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns

cwd = os.getcwd()

file_name = 'final_best_position_distance_per_trial.csv'
path = os.path.join(cwd, '../data/', file_name)
df = pd.read_csv(path)

print(df['success'].describe())
ax = sns.scatterplot(x="trial_index", y="distance_current_normalised", data=df)

plt.show()


