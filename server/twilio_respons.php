// if($_POST['Digits'] == 1) {
//   console.log('success!');
// }


<script>
  var postData = <?php echo($_POST['Digits']); ?>;
  console.log(postData);
</script>