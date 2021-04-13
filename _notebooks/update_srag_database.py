#!/usr/bin/env python
# coding: utf-8

# In[1]:


import sqlite3 as sql
import pandas as pd

from srag_functions import *


# In[2]:


# df_srag = get_srag_data(years=[2019,2020,2021],update=False,treat=True,save_local=True)

frames = []
for year in [2019,2020,2021]:
    df = get_srag_data(years=[year],update=False,treat=True,save_local=False)
    df['ano'] = year
    frames.append(df)
    
df_srag = pd.concat(frames)



# In[3]:

print('df_srag.shape:',df_srag.shape)


# In[5]:


db_name = 'srag'
db_path = f'data/opendatasus/{db_name}.db'

conn = sql.connect(db_path)
df_srag.to_sql(db_name, conn, index=False)

print(f'data base saved as {db_name}.db')


# In[ ]:




