# import pymysql
# import pandas as pd
# import mysql.connector
# # Connect to the MySQL database
# def connect_to_database():
#     connection = mysql.connector.connect(
#         host="localhost",
#         user="root",
#         password="E#gO7355",
#         database="imagineHack"
#     )
#     return connection

# # Retrieve data from the database
# def retrieve_data():
#     connection = connect_to_database()
#     query = """
#     SELECT *
#     FROM invoice
#     LEFT JOIN customer ON invoice.customerID = customer.id
#     JOIN supplier ON invoice.supplierID = supplier.id
#     JOIN item ON invoice.invoiceNumber = item.invoiceNumber
#     """
#     df = pd.read_sql(query, connection)
#     connection.close()
#     return df

# # Perform analysis on the data
# def analyze_data(data):
#     # Example analysis: calculate total purchases by each customer
#     customer_totals = data.groupby('customerName')['totalAmount'].sum()
#     return customer_totals

# def main():
#     data = retrieve_data()
#     analysis_result = analyze_data(data)
#     print(analysis_result)

# if __name__ == '__main__':
#     main()

import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="E#gO7355",
    database="imagineHack"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM customer LEFT JOIN invoice ON customer.id = invoice.customerID LEFT JOIN item ON invoice.invoiceNumber = item.invoiceNumber")

myresult = mycursor.fetchall()

print(myresult)
