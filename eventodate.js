                var now = new Date();
				var hours = now.getHours();
				var minutes = now.getMinutes();
				var timeValue = "" + ((hours >12) ? hours -12 :hours)

				//Tratamento quantidade de Digitos nos Minutos e exibi se é 
				// dia ou noite, PM, AM.

				timeValue += ((minutes < 10) ? ":0" : ":") + minutes
				timeValue += (hours >= 12) ? " PM" : " AM"
				timerRunning = true;

                dayName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
                monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Outubro", "Novembro", "Dezembro")
            
                document.write (dayName[now.getDay() ] + ", " + 
                    now.getDate () + " de " + monName [now.getMonth() ]   +  " de "  +     
                    now.getFullYear () + " - " + timeValue)