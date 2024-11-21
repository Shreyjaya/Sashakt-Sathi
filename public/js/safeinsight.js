document.getElementById('abuseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    // Get user responses
    const physicalHarm1 = document.querySelector('input[name="physicalHarm1"]:checked');
    const controlFeeling = document.querySelector('input[name="controlFeeling"]:checked');
    const sexualAdvances = document.querySelector('input[name="sexualAdvances"]:checked');
    const financeControl = document.querySelector('input[name="financeControl"]:checked');
    const onlineHarassment = document.querySelector('input[name="onlineHarassment"]:checked');
    const workplaceHarassment = document.querySelector('input[name="workplaceHarassment"]:checked');
    const partnerThreat = document.querySelector('input[name="partnerThreat"]:checked');
    const stalking = document.querySelector('input[name="stalking"]:checked');
  
    // Check if all questions are answered
    if (!physicalHarm1 || !controlFeeling || !sexualAdvances || !financeControl || !onlineHarassment || !workplaceHarassment || !partnerThreat || !stalking) {
      alert('Please answer all questions.');
      return;
    }
  
    // Hide all buttons first
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => button.style.display = 'none');
  
    // Show the correct abuse button based on the answers
    if (physicalHarm1.value === 'yes' || partnerThreat.value === 'yes') {
      document.getElementById('physicalAbuse').style.display = 'block';
    }
    if (controlFeeling.value === 'yes') {
      document.getElementById('emotionalAbuse').style.display = 'block';
    }
    if (sexualAdvances.value === 'yes') {
      document.getElementById('sexualAbuse').style.display = 'block';
    }
    if (financeControl.value === 'yes') {
      document.getElementById('financialAbuse').style.display = 'block';
    }
    if (onlineHarassment.value === 'yes') {
      document.getElementById('cyberAbuse').style.display = 'block';
    }
    if (workplaceHarassment.value === 'yes') {
      document.getElementById('workplaceAbuse').style.display = 'block';
    }
    if (stalking.value === 'yes') {
      document.getElementById('stalkingAbuse').style.display = 'block';
    }
  });