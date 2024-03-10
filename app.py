from flask import Flask, render_template, request, redirect, url_for
from flask_mail import Mail, Message

app = Flask(__name__)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'azhiyaroil@gmail.com'  # Replace with your Gmail address
app.config['MAIL_PASSWORD'] = 'lpyf eais tgdb onyp'  # Replace with your generated App Password
app.config['MAIL_DEFAULT_SENDER'] = 'azhiyaroil@gmail.com'  # Replace with your Gmail address

mail = Mail(app)

# Define other routes as needed
@app.route('/')
def index():
    return render_template('index.html')

# Define the 'submit_order' route
@app.route('/submit_order', methods=['POST'])
def submit_order():
    try:
        # Access form data using request.form
        name = request.form.get('name')
        email = request.form.get('email')
        oil_name = request.form.get('oil_name')
        quantity = request.form.get('quantity')
        address = request.form.get('address')

        # Process the form data (e.g., save to a database)

        # Send email
        subject = 'New Order'
        body = f"Name: {name}\nEmail: {email}\nOil Name: {oil_name}\nQuantity: {quantity}\nAddress: {address}"
        msg = Message(subject, recipients=['azhiyaroil@gmail.com'])  # Replace with the recipient's email address
        msg.body = body
        mail.send(msg)

        # Redirect to the index page after processing the form
        return redirect(url_for('index'))

    except Exception as e:
        return f"An error occurred: {str(e)}"

if __name__ == '__main__':
    app.run(debug=True)
