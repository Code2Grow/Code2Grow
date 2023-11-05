from flask import Flask, render_template, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/Step.html')
def step():
    return render_template('Step.html')

@app.route('/compile', methods=['POST'])
def compile_code():
    data = request.json
    code = data['code']
    compiler = data['compiler']
    language = data['language']    
      
    try:
        ret_code = get_output(code , compiler ,language).returncode
        out = get_output(code , compiler ,language).stdout   
        if ret_code == 0:
            print(out)               
            return ("Program compiled successfully")            
        else:
            return (out)
    except subprocess.CalledProcessError as e:
        return f"Compilation error: {e.output}"

def get_output(code , compiler , language):
    if language == "c":
        if compiler == "64-bit":
            result = subprocess.run(['/usr/bin/gcc' ,'-o', 't', '-xc', '-'], input=code, text=True, stderr=subprocess.STDOUT,stdout=subprocess.PIPE)
            print("\nC code compiled using 64 bit architecture")
            return result
        elif compiler == "32-bit":
            result = subprocess.run(['/usr/bin/gcc','-m32' ,'-o', 't', '-xc', '-'], input=code, text=True, stderr=subprocess.STDOUT,stdout=subprocess.PIPE)
            print("\nC code compiled using 32 bit architecture")
            return result       
    elif language == "c++":
        if compiler == "64-bit":
            result = subprocess.run(['/usr/bin/g++' ,'-o', 't', '-xc', '-'], input=code, text=True, stderr=subprocess.STDOUT,stdout=subprocess.PIPE)
            print("\nC++ code compiled using 64 bit architecture")
            return result
        elif compiler == "32-bit":
            result = subprocess.run(['/usr/bin/g++','-m32' ,'-o', 't', '-xc', '-'], input=code, text=True, stderr=subprocess.STDOUT,stdout=subprocess.PIPE)
            print("\nC++ code compiled using 32 bit architecture")
            return result
    else:
        pass

if __name__ == '__main__':
    app.run(debug=True)

